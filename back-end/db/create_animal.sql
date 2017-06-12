drop table if exists animal;
drop table if exists mainclass;
drop table if exists subgroup;
drop table if exists maingroup;

create table maingroup (
    maingroup_id serial primary key,
    maingroup_name text
);

insert into maingroup (maingroup_name)
values

---------- 01 ------------ 02 -------03------- 04 --------- 05 ---------- 06 - Animals
('Amphibians'), ('Arthropods'), ('Bird'), ('Fish'), ('Mammals'), ('Reptiles');

    create table subgroup (
        subgroup_id serial primary key,
        subgroup_name text,
        maingroup_ref INTEGER,
        FOREIGN KEY (maingroup_ref) REFERENCES maingroup (maingroup_id)
    );

    insert into subgroup (subgroup_name, maingroup_ref)
    values

    --------- 01 ------------ 02 ---------------- 03 ---- Amphibians
    ('Salientia', 1), ('Caudata', 1), ('Gymnophiona', 1),

    ------------ 04 ---------------- 05 ------------- 06 -------------- 07 ---- Arthropods
    ('Chelicerates', 2), ('Crustaceans', 2), ('Hexapods', 2), ('Myriapods', 2),

    ---------- 08 ------------------ 09 ---- Bird
    ('Neognathae', 3), ('Palaeognathae', 3),

    -------------- 10 ----------------- 11 ------------------- 12 --------------- 13 --- Fish
    ('Actinopterygii', 4), ('Agnatha', 4), ('Chondrichthyes', 4),  ('Sarcopterygii', 4),

    ----------- 14 ----------------- 15 ---- Mammals
    ('Prototheria', 5), ('Theriiformes', 5),

    ---------- 16 ----------------- 17 --------------- 18 ---- Reptiles
    ('Crocodilia', 6), ('Lepidosauria', 6), ('Testudines', 6);

        create table mainclass (
            mainclass_id serial primary key,
            mainclass_name text,
            subgroup_ref INTEGER,
            mainclass_definition TEXT,
            order_list TEXT,
            FOREIGN KEY (subgroup_ref) REFERENCES subgroup (subgroup_id)
        );

        insert into mainclass (mainclass_name, subgroup_ref, mainclass_definition, order_list)
        values

        -- A M P H I B I A N S
        --- 01 --- Amphibians : Salientia
        ('Archaeobatrachia', 1, null, null),
        --- 02 --- Amphibians : Salientia
        ('Mesobatrachia', 1, null, null),
        --- 03 --- Amphibians : Salientia
        ('Neobatrachia', 1, null, null),

        --- 04 --- Amphibians : Caudata
        ('Cryptobranchoidea', 2, null, null),
        --- 05 --- Amphibians : Caudata
        ('Salamandroidea', 2, null, null),
        --- 06 --- Amphibians : Caudata
        ('Sirenoidea', 2, null, null),

        --- 07 --- Amphibians : Gymnophiona
        ('Apoda', 3, null, null),


        -- A R T H R O P O D S
        --- 08 --- Arthropods : Chelicerates
        ('Xiphosura', 4, 'The Xiphosura are an order of marine merostome chelicerates that includes a large number of extinct lineages and only four extant species in the family Limulidae, which includes the horseshoe crabs. The group has hardly changed in millions of years; the modern horseshoe crabs look almost identical to prehistoric genera such as the Jurassic Mesolimulus, and are considered to be living fossils. The most notable difference between ancient and modern forms is that the abdominal segments in present species are fused into a single unit in adults.', 'Xiphosurida'),
        --- 09 --- Arthropods : Chelicerates
        ('Arachnid', 4, 'Arachnids are a class of joint-legged invertebrate animals, in the subphylum Chelicerata. All arachnids have eight legs, although the front pair of legs in some species has converted to a sensory function, while in other species, different appendages can grow large enough to take on the appearance of extra pairs of legs. The term is derived from the Greek word ἀράχνη (aráchnē), meaning "spider". Spiders are the largest order in the class, which also includes scorpions, ticks, mites, harvestmen, and solifuges.', 'Acari, Amblypygi, Araneae, Opiliones, Palpigradi, Pseudoscorpiones, Ricinulei, Schizomida, Scorpiones, Solifugae, Thelyphonida'),

        --- 10  --- Arthropods : Crustaceans
        ('Branchiopoda', 5, 'Branchiopoda is a class of crustaceans. It comprises fairy shrimp, clam shrimp, Cladocera, Notostraca and the Devonian Lepidocaris. They are mostly small, freshwater animals that feed on plankton and detritus.', 'Anostraca, Notostraca, Laevicaudata, Spinicaudata, Cyclestherida, Cladocera'),
        --- 11  --- Arthropods : Crustaceans
        ('Remipedia', 5, 'Remipedia is a class of blind crustaceans found in coastal aquifers which contain saline groundwater, with populations identified in almost every ocean basin so far explored, including in Australia, the Caribbean Sea, and the Atlantic Ocean. The first described remipede was the fossil Tesnusocaris goldichi (Lower Pennsylvanian), but, since 1979, at least seventeen living species have been identified with global distribution throughout the neo-tropical zone. Genetic studies have implied that remipedes are the crustaceans most closely related to insects, so much so that they and insects may be considered a "sister group" to all other crustacea.', 'Godzilliidae, Micropacteridae, Speleonectidae'),
        --- 12  --- Arthropods : Crustaceans
        ('Cephalocarida', 5, 'The Cephalocarida are a class in the subphylum Crustacea comprising only 12 benthic species. They were discovered in 1955 by Howard L. Sanders, and are commonly referred to as horseshoe shrimps. They have been grouped together with the Remipedia in the Xenocarida. Although a second family, Lightiellidae, is sometimes used, all cephalocaridans are generally considered to belong in just one family: Hutchinsoniellidae. Though no fossil record of cephalocaridans has been found, most specialists believe them to be primitive among crustaceans.', 'Chiltoniella, Hampsonellus, Hutchinsoniella, Lightiella, Sandersiella'),
        --- 13  --- Arthropods : Crustaceans
        ('Maxillopoda', 5, 'Maxillopoda is a diverse class of crustaceans including barnacles, copepods and a number of related animals. It does not appear to be a monophyletic group, and no single character unites all the members.', 'Thecostraca, Tantulocarida, Branchiura, Pentastomida, Mystacocarida, Copepoda'),
        --- 14  --- Arthropods : Crustaceans
        ('Ostracoda', 5, 'Ostracods, or ostracodes, are a class of the Crustacea, sometimes known as seed shrimp. Some 70,000 species (only 13,000 of which are extant) have been identified, grouped into several orders. They are small crustaceans, typically around 1 mm (0.039 in) in size, but varying from 0.2 to 30 mm (0.0079 to 1.1811 in) in the case of Gigantocypris. Their bodies are flattened from side to side and protected by a bivalve-like, chitinous or calcareous valve or "shell". The hinge of the two valves is in the upper region of the body. Ostracods are grouped together based on gross morphology, but the group may not be monophyletic; their molecular phylogeny remains ambiguous.', 'Myodocopa, Myodocopida, Halocyprida, Podocopa, Platycopida, Podocopida'),
        --- 15  --- Arthropods : Crustaceans
        ('Malacostraca', 5, 'Malacostraca is the largest of the six classes of crustaceans, containing about 40,000 living species, divided among 16 orders. Its members, the malacostracans, display a great diversity of body forms and include crabs, lobsters, crayfish, shrimp, krill, woodlice, amphipods, mantis shrimp and many other, less familiar animals. They are abundant in all marine environments and have colonised freshwater and terrestrial habitats. They are segmented animals, united by a common body plan comprising 20 body segments (rarely 21), and divided into a head, thorax, and abdomen.', 'Eumalacostraca, Hoplocarida, Phyllocarida'),

        --- 16  --- Arthropods : Hexapods
        ('Collembola', 6, 'Springtails (Collembola) form the largest of the three lineages of modern hexapods that are no longer considered insects (the other two are the Protura and Diplura). Although the three orders are sometimes grouped together in a class called Entognatha because they have internal mouthparts, they do not appear to be any more closely related to one another than they all are to insects, which have external mouthparts.', 'Entomobryomorpha, Poduromorpha, Symphypleona'),
        --- 17  --- Arthropods : Hexapods
        ('Protura', 6, 'The Protura, or proturans, and sometimes nicknamed coneheads, are very small (less than 2 mm long), soil-dwelling animals, so inconspicuous they were not noticed until the 20th century. The Protura constitute an order of hexapods that were previously regarded as insects, and sometimes treated as a class in their own right. Some evidence indicates the Protura are basal to all other hexapods, although not all researchers consider them Hexapoda, rendering the monophyly of Hexapoda unsettled. Uniquely among hexapods, proturans show anamorphic development, whereby body segments are added during moults. There are close to 800 species, described in seven families. Nearly 300 species are contained in a single genus, Eosentomon.', 'Acerentomata, Eosentomata, Sinentomata'),
        --- 18  --- Arthropods : Hexapods
        ('Diplura', 6, 'The order Diplura is one of the four groups of hexapods, alongside insects, springtails and Protura. They are sometimes called "two-pronged bristletails".', 'Campodeidae, Procampodeidae, Projapygidae, Anajapygidae, Japygidae, Heterojapygidae, Dinjapygidae, Evalljapygidae, Parajapygidae, Octostigmatidae'),
        --- 19  --- Arthropods : Hexapods
        ('Insecta', 6, 'Insects (from Latin insectum, a calque of Greek ἔντομον [éntomon], "cut into sections") are a class of hexapod invertebrates within the arthropod phylum that have a chitinous exoskeleton, a three-part body (head, thorax and abdomen), three pairs of jointed legs, compound eyes and one pair of antennae. They are the most diverse group of animals on the planet, including more than a million described species and representing more than half of all known living organisms. The number of extant species is estimated at between six and ten million, and potentially represent over 90% of the differing animal life forms on Earth. Insects may be found in nearly all environments, although only a small number of species reside in the oceans, a habitat dominated by another arthropod group, crustaceans.', 'Archaeognatha, Blattodea, Coleoptera, Dermaptera, Diptera, Embioptera, Ephemeroptera, Hemiptera, Hymenoptera, Lepidoptera, Mantodea, Mecoptera, Megaloptera, Neuroptera, Notoptera, Odonata, Orthoptera, Phasmatodea, Phthiraptera, Plecoptera, Psocodea, Raphidioptera, Siphonaptera, Strepsiptera, Thysanoptera, Thysanura, Trichoptera, Zoraptera, Zygentoma'),

        --- 20  --- Arthropods : Myriapods
        ('Chilopoda', 7, 'Centipedes are arthropods belonging to the class Chilopoda of the subphylum Myriapoda. They are elongated metameric creatures with one pair of legs per body segment. Centipedes are known to be highly venomous, and often inject paralyzing venom.', 'Scutigeromorpha, Lithobiomorpha, Craterostigmomorpha, Scolopendromorpha, Geophilomorpha'),
        --- 21  --- Arthropods : Myriapods
        ('Diplopoda', 7, 'Millipedes are a group of arthropods that are characterised by having two pairs of jointed legs on most body segments; they are known scientifically as the class Diplopoda, the name being derived from this feature.', 'Penicillata, Chilognatha'),
        --- 22  --- Arthropods : Myriapods
        ('Pauropoda', 7, 'Pauropods are small, pale, millipede-like arthropods. Around 830 species in twelve families are found worldwide, living in soil and leaf mould. They look rather like centipedes, but are probably the sister group to millipedes.', 'Hexamerocerata, Tetramerocerata'),
        --- 23  --- Arthropods : Myriapods
        ('Symphyla', 7, 'Symphylans, also known as garden centipedes or pseudocentipedes, are soil-dwelling arthropods of the class Symphyla in the subphylum Myriapoda.', 'Scutigerellidae, Scolopendrellidae'),


        -- B I R D S
        --- 24 --- Birds : Neognathae
        ('Galloanserae', 8, null, null),
        --- 25 --- Birds : Neognathae
        ('Neoaves', 8, null, null),

        --- 26 --- Birds : Palaeognathae
        ('Apterygiformes', 9, null, null),
        --- 27 --- Birds : Palaeognathae
        ('Casuariiformes', 9, null, null),
        --- 28 --- Birds : Palaeognathae
        ('Rheiformes', 9, null, null),
        --- 29 --- Birds : Palaeognathae
        ('Struthioniformes', 9, null, null),
        --- 30 --- Birds : Palaeognathae
        ('Tinamiformes', 9, null, null),


        -- F I S H
        --- 31 --- Fish : Actinopterygii
        ('Chondrostei', 10, 'Chondrostei are primarily cartilaginous fish showing some degree of ossification. It is thought that the cartilaginous condition is derived, and that the ancestors of this group were bony fish with fully ossified skeletons.', 'Acipenseriformes, Polypteriformes'),
        --- 32 --- Fish : Actinopterygii
        ('Cladistia', 10, 'Cladistia is a clade of bony fishes that currently consists of few anguilliform remnants of an ancient diversity. Their major synapomorphies are a dorsal fin with independent rays, and a posteriorly elongated parasphenoid.', 'Guildayichthyiformes, Polypteriformes'),
        --- 33 --- Fish : Actinopterygii
        ('Neopterygii', 10, 'Neopterygii are a group of fish. Neopterygii means "new fins". Only a few changes occurred during their evolution from the earlier actinopterygians. They appeared sometime in the Late Permian, before the time of the dinosaurs. The Neopterygii are a very successful group of fish, because they can move more rapidly than their ancestors. Their scales and skeletons began to lighten during their evolution, and their jaws became more powerful and efficient. While electroreception and the ampullae of Lorenzini are present in all other groups of fish, with the exception of hagfish (although hagfish are not Actinopterygii, they are Agnathans}, Neopterygii have lost this sense, even if it has later been re-evolved within Gymnotiformes and catfishes, which possess nonhomologous teleost ampullae.', 'Lepisosteiformes, Amiiformes, Osteoglossiformes, Hiodontiformes, Elopiformes, Albuliformes, Notacanthiformes, Anguilliformes, Saccopharyngiformes, Clupeiformes, Gonorynchiformes, Cypriniformes, Characiformes, Gymnotiformes, Siluriformes, Argentiniformes, Salmoniformes, Esociformes, Osmeriformes, Ateleopodiformes, Stomiiformes, Aulopiformes, Myctophiformes, Lampriformes, Polymixiiformes, Percopsiformes, Batrachoidiformes, Lophiiformes, Gadiformes, Ophidiiformes, Mugiliformes, Atheriniformes, Beloniformes, Cetomimiformes, Cyprinodontiformes, Stephanoberyciformes, Beryciformes, Zeiformes, Gobiesociformes, Gasterosteiformes, Syngnathiformes, Synbranchiformes, Tetraodontiformes, Pleuronectiformes, Scorpaeniformes, Perciformes'),

        --- 34 --- Fish : Agnatha
        ('Cyclostomata', 11, 'Cyclostomata is a group of agnathans that comprises the living jawless fishes: the lampreys and hagfishes. Both groups have round mouths that lack jaws but have retractable horny teeth. The name Cyclostomata means "round mouths".', 'Myxini, Hyperoartia'),

        --- 35 --- Fish : Chondrichthyes
        ('Elasmobranchii', 12, 'Elasmobranchii is a subclass of Chondrichthyes or cartilaginous fish. Members of this subclass are characterised by having five to seven pairs of gill clefts opening individually to the exterior, rigid dorsal fins and small placoid scales on the skin. The teeth are in several series; the upper jaw is not fused to the cranium, and the lower jaw is articulated with the upper. The details of this jaw anatomy vary between species, and help distinguish the different elasmobranch clades. The pelvic fins in males are modified to create claspers for the transfer of sperm. There is no swim bladder, instead these fish maintain buoyancy with large livers rich in oil. The earliest elasmobranch fossils came from the Devonian and many surviving orders date back to the Cretaceous, or even earlier. Many species became extinct during the Permian and there was a burst of adaptive radiation during the Jurassic. Extant species are classified under Selachii (Selachimorpha), the modern sharks, and Batoidea, the rays, skates and sawfish.', 'Heterodontiformes, Orectolobiformes, Lamniformes, Carcharhiniformes, Hexanchiformes, Squaliformes, Squatiniformes, Pristiophoriformes, Torpediniformes, Pristiformes, Rajiformes, Myliobatiformes'),
        --- 36 --- Fish : Chondrichthyes
        ('Holocephali', 12, 'The subclass Holocephali is a taxon of cartilaginous fish in the class Chondrichthyes. The earliest fossils are of teeth and come from the Devonian period.', 'Chimaeriformes'),

        --- 37 --- Fish : Sarcopterygii
        ('Guiyu Oneiros', 13, 'Guiyu oneiros is the earliest articulated bony fish discovered. The generic name Guiyu is a transliteration of the Mandarin 鬼魚 guǐyú "ghost fish" and the specific name oneiros is from Greek ὄνειρος "dream".', null),
        --- 38 --- Fish : Sarcopterygii
        ('Actinistia', 13, 'Actinistia is a subclass of mostly fossil lobe-finned fishes. This subclass contains the coelacanths, including the two living coelacanths, both of the genus Latimeria: the West Indian Ocean coelacanth and the king of the sea.', 'Coelacanthiformes, Rebellatricidae'),
        --- 39 --- Fish : Sarcopterygii
        ('Rhipidistia', 13, 'The Rhipidistia, also known as dipnotetrapodomorphs are a clade of lobe-finned fishes which include the tetrapods and lungfishes.', 'Dipnomorpha, Tetrapodomorpha'),


        -- M A M M A L S
        --- 40 --- Mammals : Prototheria
        ('Monotremata', 14, null, null),

        --- 41 --- Mammals : Theriiformes
        ('Afrotheria', 15, null, null),
        --- 42 --- Mammals : Theriiformes
        ('Xenarthra', 15, null, null),
        --- 43 --- Mammals : Theriiformes
        ('Boreoeutheria', 15, null, null),


        -- R E P T I L E S
        --- 44 --- Reptiles : Crocodilia
        ('Gavialoidea', 16, null, null),
        --- 45 --- Reptiles : Crocodilia
        ('Brevirostres', 16, null, null),

        --- 46 --- Reptiles : Lepidosauria
        ('Rhynchocephalia', 17, null, null),
        --- 47 --- Reptiles : Lepidosauria
        ('Squamata', 17, null, null),

        --- 48 --- Reptiles : Testudines
        ('Cryptodira', 18, null, null),
        --- 49 --- Reptiles : Testudines
        ('Pleurodira', 18, null, null);


create table animal (
    animal_id serial primary key,
    animal_name TEXT, ----------------------------------------- 01 -
    mainclass_ref INTEGER, ------------------------------------ 02 -
    sci_name TEXT, -------------------------------------------- 03 - Scientific name represents, the Binomial and Trinomial name.
    image1 TEXT, ---------------------------------------------- 04 -
    image2 TEXT, ---------------------------------------------- 05 -
    intro TEXT, ----------------------------------------------- 06 - Intro includes: Geographic data.
    description TEXT, ----------------------------------------- 07 -
    behaviour TEXT, ------------------------------------------- 08 -
    def_mech TEXT, -------------------------------------------- 09 -
    diet TEXT, ------------------------------------------------ 10 -  Diet includes: Hunting mechanisms and methods.
    FOREIGN KEY (mainclass_ref) REFERENCES mainclass (mainclass_id)
);

-------------------| 01         | 02           | 03      | 04    | 05    | 06   | 07        | 08        | 09      | 10 |
insert into animal (animal_name, mainclass_ref, sci_name, image1, image2, intro, description, behaviour, def_mech, diet)
values

----- A M P H I B I A N S --- S A L I E N T I A
----- Amphibians : Salientia : Neobatrachia
('Blue Poison Dart Frog', 3, 'Dendrobates Tinctorius', null, null, null, null, null, null, null),


---------- A R T H R O P O D S --- C H E L I C E R A T E S
---------- Arthropods : Chelicerates : Arachnid
('Sydney Funnel-Web Spider', 9, 'Atrax Robustus',
'./images/api/arachnid/sydney_funnel_web_spider1.png',
'./images/api/arachnid/sydney_funnel_web_spider2.png',
--- Intro
'The Sydney funnel-web spider is a species of venomous mygalomorph spider native to eastern Australia, usually found within a 100 km radius of Sydney.
It is a member of a group of spiders known as Australian funnel-web spiders. Its bite is capable of causing serious injury or death in humans if left untreated.',
--- Description
'The Sydney funnel-web spider has a body length ranging from 1 to 5 cm (0.4 to 2 in).
Both sexes are glossy and darkly coloured, ranging from blue-black, to black, to brown or dark-plum coloured.
The carapace covering the cephalothorax is almost hairless and appears smooth and glossy.
Another characteristic are finger-like spinnerets at the end of their abdomen.
The shorter-lived male is smaller than the female but longer legged.
The average leg length for the spider in general is six to seven centimeters.
As part of its milking programme in January 2016, the Australian Reptile Park received a male Sydney funnel-web spider with a 10-centimetre (4 in) leg span.
The spider was described by the park as the largest specimen that it had seen.',
--- Behaviour
'Sydney funnel-web spiders typically build silk-lined tubular burrow retreats with collapsed "tunnels" or open "funnel" entrances from which irregular trip-lines radiate over the ground.
Sydney funnel-webs burrow in sheltered habitats where they can find a moist and humid climate, for instance under rocks, logs or borer holes in rough-barked trees. The long-lived female funnel-webs spend most of the time in their silk-lined tubular burrow retreats.
Waiting for potential prey to walk across the trip-lines, the females rush out and subdue their prey by injecting their venom.
Males tend to wander during the warmer months of the year, looking for receptive females to mate with. This makes encounters with male specimens more likely as they sometimes wander into backyards or houses, or fall into swimming pools.
The spiders can survive such immersion for up to twenty-four hours, trapping air bubbles on hairs around their abdomen. The spiders are mainly active at night, as typical day-time conditions would dehydrate them.
During the day, they seek cover in cool, moist hideaways. After heavy rain, spider activity is increased as their burrows may be flooded.
When threatened or provoked, funnel-web spiders will display aggressive behaviour, rearing up on their hind legs and displaying their fangs.
When biting, the funnel-web spiders maintain a tight grip on their victim, often biting repeatedly.',
--- Defense Mechanism
'Funnel-web spider venom contains a compound known as atracotoxin, an ion channel inhibitor, which makes the venom highly toxic for humans and other primates.
However, it does not affect the nervous system of other mammals.
These spiders typically deliver a full envenomation when they bite, often striking repeatedly, due to their defensiveness and large chitinous cheliceral fangs.
There has been no reported case of severe envenoming by female funnel-web spiders, which is consistent with the finding that the venom of female specimens is less potent than the venom of their male counterparts.
In the case of severe envenomation, the time to onset of symptoms is less than one hour, with a study about funnel-web spider bites finding a median time of 28 minutes.
This same study revealed that children are at a particular risk of severe funnel-web envenoming, with 42% of all cases of severe envenoming being children.
There is at least one recorded case of a small child dying within 15 minutes of a bite from a Sydney funnel-web spider.
The antivenom was developed by a team headed by Struan Sutherland at the Commonwealth Serum Laboratories in Melbourne.
Since the antivenom became available in 1981, there have been no recorded fatalities from Sydney funnel-web spider bites.
In September 2012, it was reported that stocks of antivenom were running low, and members of the public were asked to catch the spiders so that they could be milked for their venom.
One dose of antivenom requires around 70 milkings from a spider. The bite of a Sydney funnel-web is initially very painful, with clear fang marks separated by several millimetres.
The size of fangs is responsible for the initial pain. In some cases the spider will remain attached until dislodged by shaking or flicking it off.
A funnel-web bite is regarded as a medical emergency requiring immediate hospital treatment.
Current guidelines for antivenom recommend two vials, or four vials if symptoms of envenomation are severe.
Patients are assessed every fifteen minutes, with further vials recommended if symptoms do not resolve.
The most vials used to treat a bite is 12. The patient was a 10-year-old boy who was bitten in February 2017 by a male funnel-web spider hiding in a shoe.',
--- Diet
'Potential prey includes arthropods, lizards and frogs.'),

------------------------------------------------------------------------------------------------------------------------------------------------------->>>>>
---------- Arthropods : Chelicerates : Arachnid
('White-Tailed Spider', 9, 'Lampona Cylindrata',
'./images/api/arachnid/sydney_funnel_web_spider1.png',
'./images/api/arachnid/sydney_funnel_web_spider2.png',
--- Intro
'White-tailed spiders are spiders native to southern and eastern Australia, and so named because of the whitish tips at the end of their abdomens. 
Common species are Lampona cylindrata and Lampona murina. Both these species have been introduced to New Zealand.',
--- Description
'The two common species are similar in appearance; L. cylindrata is slightly larger with females being up to 18 mm long while males are up to 12 mm in body length.
The legs span approximately 28 mm. The two species are not easily distinguished without microscopic examination.
They are slender spiders with dark reddish to grey, cigar-shaped body and dark orange-brown banded legs.
The grey abdomen has two pairs of faint white spots and—usually but not always—a distinct white spot at the tip just above the spinnerets. 
The similarities have led people to think there is only one species of white-tailed spider.
It is possible that not all white-tailed species have been identified. The descriptor, white tail, is applied to a variety of species of spiders for which a distal white mark on their abdomen is a distinctive feature; other markings disappear with moultings but the white tail remains to adulthood.',
--- Behaviour
'They live in gardens and inside houses, beneath bark and rocks, in leaf litter and are often found in the folds of clothes, towels and shoes.
They do not build webs. Most active at night, they hunt for other spiders.',
--- Defense Mechanism
'A common perception is that white tail spider bites can be associated with long term skin infections, and in rarer cases progression to necrosis.
This is an attribution of infections presenting to medical care with a complaint of "spider bite." Venom has no bacteria, and infections do not arise from spider bites.
The well-described brown recluse bite is direct damage to skin and tissue. It has a limited area and does not spread. No formal studies have found evidence for associating necrosis with white tail spider bites.
White tail spider bites may cause a small red or discolored bump, similar to an insect bite, that burns or itches.
The issue of necrosis in some bite cases in published studies begins with a paper presented at the International Society on Toxinology World Congress held in Brisbane in 1982.
Both the white-tailed spider and the wolf spider were considered as candidates for possibly causing suspected spider bite necrosis in the Australian context.
In Brazil the recluse spider was identified as linked to necrosis.
Following this initial report, numerous other cases implicated white-tailed spiders in causing necrotic ulcers.
All of these cases lacked a positively identified spider — or even a spider bite in some cases.
Additionally, there had not been a case of arachnogenic necrosis reported in the two hundred years of European colonisation before these cases.
Of the 130 cases of white tail spider bites studied by Isbister and Gray, more than 60% reported that the person had been bitten by spiders that had got into clothing, towels or beds.
Clinical toxicologist Geoffrey Isbister studied 130 cases of arachnologist-identified white-tailed spider bites, and found no necrosis or confirmed infections, concluding that such outcomes are very unlikely for a white-tailed spider bite.
The major effects from a bite in this study were local (pain, a red mark, local swelling and itchiness); and rarely systemic (nausea, vomiting, malaise or headache). All these symptoms are generally mild and resolve over time.',
--- Diet
'Their favoured prey are the black house spider (Badumna insignis) and the closely related brown house spider (Badumna longinqua), both of which are, like the whitetail, native to Australia but have been inadvertently introduced to New Zealand.'),
------------------------------------------------------------------------------------------------------------------------------------------------------->>>>>

--------------- B I R D S
--------------- Birds : Neognathae : Neoaves
('Peregrine Falcon', 25, 'Falco Peregrinus', null, null, null, null, null, null, null),


-------------------- F I S H
-------------------- Fish : Chondrichthyes : Elasmobranchii
('Great White Shark', 35, 'Carcharodon Carcharias', null, null, null, null, null, null, null),


------------------------- M A M M A L S --- P R O T O T H E R I A
------------------------- Mammals : Prototheria : Monotremata
('Platypus', 40, 'Ornithorhynchus Anatinus', null, null, null, null, null, null, null),

------------------------- M A M M A L S --- T H E R I I F O R M E S
------------------------- Mammals : Theriiformes : Boreoeutheria
('Red Panda', 43, 'Ailurus Fulgens', null, null, null, null, null, null, null),


------------------------------ R E P T I L E S
------------------------------ Reptiles : Lepidosauria : Squamata
('Spiny Bush Viper', 47, 'Atheris Hispida', null, null, null, null, null, null, null);