angular.module('animalid')
  .controller('atamphibianControl', function($scope) {

var Data = [
        { name:'Caudata', children:[
            { name:'Cryptobranchoidea', children:[
                { name:'Cryptobranchidae', children:[
                        { name:'Andrias', color:'#24603c' },
                        { name:'Cryptobranchus', color:'#0b592a' },  
                    ]},
                { name:'Hynobiidae', children:[
                        { name:'Batrachuperus', color:'#24603c' },
                        { name:'Hynobius', color:'#0b592a' },
                        { name:'Liua', color:'#24603c' },
                        { name:'Onychodactylus', color:'#0b592a' }, 
                        { name:'Pachyhynobius', color:'#24603c' },
                        { name:'Paradactylodon', color:'#0b592a' }, 
                        { name:'Pseudohynobius', color:'#24603c' },
                        { name:'Protohynobius', color:'#0b592a' }, 
                        { name:'Ranodon', color:'#24603c' },
                        { name:'Salamandrella', color:'#0b592a' }, 
                    ]},
                ]},
            { name:'Salamandroidea', children:[
                { name:'Ambystomatidae', color:'#173523' },
                { name:'Amphiumidae', children:[
                        { name:'Amphiuma Means', color:'#24603c' },
                        { name:'Amphiuma Pholeter', color:'#0b592a' },
                        { name:'Amphiuma Tridactylum', color:'#24603c' },
                    ]},
                { name:'Dicamptodontidae', color:'#173523' },
                { name:'Plethodontidae', color:'#132b1d' },
                { name:'Proteidae', color:'#173523' },  
                { name:'Rhyacotritonidae', color:'#132b1d' },
                { name:'Salamandridae', color:'#173523' },  
            ]},
            { name:'Sirenoidea', children:[
                { name:'Pseudobranchus', color:'#24603c' },
                { name:'Siren', color:'#0b592a' },  
            ]},
        ]},
        { name:'Gymnophiona', children:[
            { name:'Apoda', children:[
                { name:'Caeciliidae', color:'#132b1d' },
                { name:'Chikilidae', color:'#173523' },
                { name:'Dermophiidae', color:'#132b1d' },
                { name:'Herpelidae', color:'#173523' },
                { name:'Ichthyophiidae', color:'#132b1d' },
                { name:'Indotyphlidae', color:'#173523' },
                { name:'Rhinatrematidae', color:'#132b1d' },
                { name:'Scolecomorphidae', color:'#173523' },  
                { name:'Siphonopidae', color:'#132b1d' },
                { name:'Typhlonectidae', color:'#173523' },  
            ]},
        ]},
        { name:'Salientia', children:[
            { name:'Archaeobatrachia', children:[
                { name:'Ascaphidae', color:'#24603c' },
                { name:'Bombinatoridae', color:'#0b592a' },
                { name:'Alytidae', color:'#24603c' },
                { name:'Leiopelmatidae', color:'#0b592a' },   
            ]},
            { name:'Mesobatrachia', children:[
                { name:'Pelobatidae', color:'#132b1d' },
                { name:'Pelodytidae', color:'#173523' },
                { name:'Pipidae', color:'#132b1d' },
                { name:'Rhinophrynidae', color:'#173523' },
                { name:'Scaphiopodidae', color:'#132b1d' },
                { name:'Megophryidae', color:'#173523' }, 
            ]},
            { name:'Neobatrachia', children:[
                { name:'Bufonoidea', color:'#24603c' },
                { name:'Dendrobatoidea', color:'#0b592a' },
                { name:'Hyloidea', color:'#24603c' },
                { name:'Microhylidae', color:'#0b592a' },
                { name:'Ranoidea', color:'#24603c' },   
            ]},
        ]},
];

(function ($) {
    var M = Math,
        $div, $pie, $svg, fnArc, fnX, fnY, Df;
    Df = {
        pad: 5,
        speed: 500,
        width: 1300,
        height: null,
        radius: null,
        inits: function () {
            this.height = this.width;
            this.radius = this.width / 2;

            $div = $.select('#animaltree');

            fnX = $.scale.linear().range([0, 2 * M.PI]);
            fnY = $.scale.pow().exponent(1.3).domain([0, 1]).range([0, Df.radius]);
        },
    };
    Df.inits();
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    $svg = $div.append('svg') //
    .attr('width', Df.width + Df.pad * 2) //
    .attr('height', Df.height + Df.pad * 2) //
    .append('g') //
    .attr('transform', 'translate(' + [Df.radius + Df.pad, Df.radius + Df.pad] + ')');

    $pie = $.layout.partition() //
    .sort(null) //
    .value(function (d) {
        return 5.8 - d.depth;
    });

    fnArc = $.svg.arc() //
    .startAngle(function (d) {
        return M.max(0, M.min(2 * M.PI, fnX(d.x)));
    }) //
    .endAngle(function (d) {
        return M.max(0, M.min(2 * M.PI, fnX(d.x + d.dx)));
    }) //
    .innerRadius(function (d) {
        return M.max(0, d.y ? fnY(d.y) : d.y);
    }) //
    .outerRadius(function (d) {
        return M.max(0, fnY(d.y + d.dy));
    });

    function isParentOf(p, c) {
        if (p === c) {
            return true;
        }
        if (p.children) {
            return p.children.some(function (d) {
                return isParentOf(d, c);
            });
        }
        return false;
    }

    function color(d) {
        var colors, a, b;
        //
        if (d.children) {
            // There is a maximum of two children!
            colors = d.children.map(color);
            a = $.hsl(colors[0]);
            b = $.hsl(colors[1]);
            // L*a*b* might be better here...
            return $.hsl((a.h + b.h) / 2, a.s * 1.2, a.l / 1.2);
        }
        return d.color || '#fff';
    }

    function maxY(d) {
        return d.children ? M.max.apply(M, d.children.map(maxY)) : d.y + d.dy;
    }

    // Interpolate the scales!

    function arcTween(d) {
        var xd, yd, yr;
        //
        xd = $.interpolate(fnX.domain(), [d.x, d.x + d.dx]);
        yd = $.interpolate(fnY.domain(), [d.y, maxY(d)]);
        yr = $.interpolate(fnY.range(), [d.y ? 20 : 0, Df.radius]);

        return function (d) {
            return function (t) {
                fnX.domain(xd(t));
                fnY.domain(yd(t)).range(yr(t));
                return fnArc(d);
            };
        };
    }

    function brightness(rgb) {
        return (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114);
    }

    function _init(json) {
        var nodes, path, text, textEnter;

        function click(d) {
            path.transition().duration(Df.speed).attrTween('d', arcTween(d));

            text.style('visibility', function (e) {
                return isParentOf(d, e) ? null : $.select(this).style('visibility');
            }) //
            .transition().duration(Df.speed) //
            .attrTween('text-anchor', function (d) {
                return function () {
                    return fnX(d.x + d.dx / 2) > M.PI ? 'end' : 'start';
                };
            }) //
            .attrTween('transform', function (d) {
                var multiline = (d.name || '').split(' ').length > 1;
                //
                return function () {
                    var angle, rotate;
                    //
                    angle = fnX(d.x + d.dx / 2) * 180 / M.PI - 90;
                    rotate = angle + (multiline ? - 0.5 : 0);

                    return ['rotate(', rotate, ')', //
                    'translate(', fnY(d.y) + Df.pad, ')', //
                    'rotate(', angle > 90 ? - 180 : 0, ')'].join('');
                };
            }) //
            .style('fill-opacity', function (e) {
                return isParentOf(d, e) ? 1 : 1e-6;
            }) //
            .each('end', function (e) {
                $.select(this).style('visibility', isParentOf(d, e) ? null : 'hidden');
            });
        }

        nodes = $pie.nodes({
            children: json
        });

        path = $svg.selectAll('path').data(nodes);
        path.enter() //
        .append('path') //
        .attr({
            'd': fnArc,
            'fill-rule': 'evenodd',
            'id': function (d, i) {
                return 'path-' + i;
            },
        }) //
        .style('fill', color) //
        .on('click', click);

        text = $svg.selectAll('text').data(nodes);

        textEnter = text.enter().append('text');
        textEnter.style({
            'fill-opacity': 1,
            'font-family': 'code bold',
            'font-size': 10,
            'letter-spacing': 2,
            'text-shadow':("0px 0px 20px black"),
            'fill': function (d) {
                return brightness($.rgb(color(d))) < 125 ? '#eee' : '#000';
            },
        }) //
        .attr({
            'dy': '.2em',
            'text-anchor': function (d) {
                return fnX(d.x + d.dx / 2) > M.PI ? 'end' : 'start';
            },
            'transform': function (d) {
                var multiline, angle, rotate, rotated;
                //
                multiline = (d.name || '').split('  ').length > 1;
                angle = fnX(d.x + d.dx / 2) * 180 / M.PI - 90;
                rotate = angle + (multiline ? - 0.5 : 0);
                rotated = (angle > 90 ? - 180 : 0);
                //
                return ['rotate(', rotate, ')', //
                'translate(', fnY(d.y) + Df.pad, ')', //
                'rotate(', rotated, ')'].join('');
            },
        }) //
        .on('click', click);

        textEnter.append('tspan') //
        .attr('x', 0) //
        .text(function (d) {
            return (d.depth ? d.name.split('  ')[0] : '');
        }) //
        .append('tspan') //
        .attr({
            'x': 0,
            'dy': '1em',
        }) //
        .text(function (d) {
            return (d.depth ? d.name.split('  ')[1] || '' : '');
        });
    }
    _init(Data);

}(d3));

  });
