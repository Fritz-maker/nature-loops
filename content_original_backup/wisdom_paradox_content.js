// Add this at the very beginning of your wisdom_paradox_content.js file
function getLoopContent() {
    return wisdomParadoxContent;
}

// This file contains the content pool for "The Wisdom Paradox" loop (Ages 65+).
// The ultimate recursive loop - wisdom examining its own development!

const wisdomParadoxContent = [
    // Genetic Wisdom Items (Nature-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Elder wisdom primarily reflects the natural flowering of genetic cognitive and emotional capacities that mature over time, independent of specific life experiences.",
        correct_answer: false,
        value: 22,
        stance: "nurture",
        correct_feedback: "Wisely false! Elder wisdom emerges from the complex interaction between genetic capacities AND accumulated life experiences. You can't separate the flower from the soil that grew it - wisdom is both genetic potential and experiential cultivation!",
        incorrect_feedback: "Research shows that wisdom develops through the interaction between genetic cognitive/emotional capacities and accumulated life experiences, cultural learning, and environmental challenges rather than purely genetic maturation.",
        engine_commentary: "The Engine appreciates wisdom ecology: elder wisdom isn't just genetic programming finally expressing itself - it's the beautiful collaboration between inborn potential and a lifetime of environmental education!"
    },

    {
        type: "mc_question",
        question: "When elders reflect on their life patterns and offer insights to younger generations, they are drawing primarily on:",
        options: {
            "A": "Genetic programming for species-level wisdom transmission",
            "B": "Accumulated pattern recognition from decades of experience",
            "C": "Universal truths that transcend individual development",
            "D": "Cognitive decline leading to simplified thinking"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "nurture",
        correct_feedback: "Pattern-wise! Elder wisdom largely reflects sophisticated pattern recognition developed through decades of observing life cycles, relationship dynamics, and cause-and-effect relationships. They've seen this movie before, multiple times, with variations!",
        incorrect_feedback: "Elder wisdom primarily emerges from accumulated experience-based pattern recognition rather than genetic programming or universal knowledge, allowing for sophisticated analysis of life patterns and outcomes.",
        engine_commentary: "The Engine observes experiential compilation: elder wisdom is like a massive database of life experiences that has been running pattern analysis for decades - they can predict plot developments because they've seen so many similar stories!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The capacity for wisdom (perspective-taking, emotional regulation, long-term thinking) peaks in late life because the aging brain finally reaches optimal functioning.",
        correct_answer: false,
        value: 18,
        stance: "nurture",
        correct_feedback: "Neurologically nuanced! Wisdom peaks in late life not because of optimal brain functioning but because accumulated experience compensates for some cognitive decline. Wisdom is experience-based intelligence, not just raw cognitive power!",
        incorrect_feedback: "Research shows that late-life wisdom emerges from accumulated experiential knowledge and developed emotional regulation rather than peak cognitive functioning, often involving compensation for some age-related cognitive changes.",
        engine_commentary: "The Engine appreciates compensatory wisdom: elder brains might not process information as quickly, but they've built such sophisticated knowledge databases that they can often reach better conclusions than faster younger brains!"
    },

    {
        type: "factoid",
        text: "Studies of centenarians show that those who demonstrate the highest levels of wisdom often share similar life experiences - overcoming significant adversity, maintaining long relationships, and engaging in continuous learning throughout their lives.",
        value: 16,
        stance: "nurture",
        engine_commentary: "The Engine notes wisdom prerequisites: perhaps wisdom isn't just about living long enough for genetic programming to unfold, but about accumulating specific types of growth-promoting experiences!"
    },

    // Experiential Wisdom Items (Nurture-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Elder perspectives on life meaning and priorities are largely shaped by their accumulated experiences of loss, achievement, relationship, and cultural change rather than genetic predispositions.",
        correct_answer: true,
        value: 24,
        stance: "nurture",
        correct_feedback: "Experientially profound! Elder wisdom about what matters emerges from living through multiple life cycles - seeing careers rise and fall, relationships begin and end, health fluctuate, cultures change. Their priorities reflect experiential education about what endures!",
        incorrect_feedback: "Elder perspectives on meaning and priorities are primarily shaped by accumulated life experiences including loss, achievement, relationship changes, and cultural transformation rather than genetic programming.",
        engine_commentary: "The Engine appreciates experiential distillation: elder wisdom about life priorities is like the concentrated essence of decades of experience - they know what matters because they've experienced what doesn't last!"
    },

    {
        type: "mc_question",
        question: "When elders demonstrate remarkable emotional regulation and perspective during crises, this primarily reflects:",
        options: {
            "A": "Genetic emotional stability finally expressing itself",
            "B": "Cognitive decline reducing emotional intensity",
            "C": "Accumulated practice managing difficult emotions and situations",
            "D": "Spiritual development independent of psychological factors"
        },
        correct_answer_key: "C",
        value: 21,
        stance: "nurture",
        correct_feedback: "Emotionally educated! Elder emotional wisdom reflects decades of practice managing stress, loss, conflict, and uncertainty. They've developed sophisticated emotional regulation skills through repeated real-world emotional education!",
        incorrect_feedback: "Elder emotional regulation typically results from accumulated practice and learning from previous emotional challenges rather than genetic factors or cognitive changes.",
        engine_commentary: "The Engine recognizes emotional expertise: elder emotional stability is like having a PhD in feeling management - they've had decades of practicum experience in emotional regulation!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Elders who have lived through significant historical changes (wars, technological revolutions, social movements) often develop unique perspectives that younger generations cannot access through books or media.",
        correct_answer: true,
        value: 19,
        stance: "nurture",
        correct_feedback: "Historically wise! Living through events creates embodied knowledge that's qualitatively different from learning about them. Elders carry irreplaceable experiential knowledge about how social change actually feels and unfolds in real time!",
        incorrect_feedback: "Direct historical experience creates forms of knowledge and perspective that cannot be fully transmitted through secondary sources, giving elders unique insights into social and cultural change processes.",
        engine_commentary: "The Engine appreciates historical embodiment: elders don't just know about history - they are living libraries of embodied historical experience that can't be downloaded from Wikipedia!"
    },

    {
        type: "factoid",
        text: "Research shows that elders who have experienced diverse life environments (different cultures, social classes, or geographic regions) demonstrate higher levels of cognitive flexibility and wisdom than those with more homogeneous life experiences.",
        value: 17,
        stance: "nurture",
        engine_commentary: "The Engine notes diversity benefits: perhaps wisdom isn't just about living long but about living widely - accumulating diverse environmental experiences that expand cognitive and emotional capabilities!"
    },

    // Bridge/Integration Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: Elder wisdom represents the culmination of both genetic developmental programming reaching its final stage AND the accumulated effects of a lifetime of environmental learning and adaptation.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Culminatively brilliant! Elder wisdom is both the flowering of genetic developmental potential AND the harvest of experiential learning. Nature provided the cognitive/emotional infrastructure, nurture provided the educational curriculum, and time allowed the integration!",
        incorrect_feedback: "Elder wisdom represents the complex integration of genetic developmental capacities and accumulated environmental learning working together over the full lifespan to create sophisticated understanding.",
        engine_commentary: "The Engine achieves developmental synthesis: elder wisdom is like the final movement of a lifelong symphony where genetic themes and environmental variations have been developing together for decades!"
    },

    {
        type: "mc_question",
        question: "The most accurate way to understand elder wisdom is:",
        options: {
            "A": "Genetic programming for species wisdom finally activating in late life",
            "B": "Pure accumulated learning compensating for cognitive decline",
            "C": "The integrated product of lifelong nature-nurture collaboration",
            "D": "Random individual variation in aging cognitive patterns"
        },
        correct_answer_key: "C",
        value: 23,
        stance: "neutral",
        correct_feedback: "Integratively wise! Elder wisdom emerges from the lifelong collaboration between genetic capacities (pattern recognition, emotional regulation, long-term thinking) and environmental education (experience, culture, relationships). The ultimate nature-nurture collaboration!",
        incorrect_feedback: "Elder wisdom represents the culminating product of lifelong interactions between genetic developmental capacities and accumulated environmental experiences rather than either factor alone.",
        engine_commentary: "The Engine celebrates collaborative culmination: elder wisdom is the masterpiece created by genetic potential and environmental experience working as co-artists across an entire lifetime!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you're exploring questions about wisdom and development suggests that the very curiosity driving this exploration may itself be a form of developmental wisdom emerging in real-time.",
        correct_answer: true,
        value: 20,
        stance: "neutral",
        correct_feedback: "Meta-wisely profound! Your curiosity about development IS developmental wisdom in action - the sophisticated capacity to examine your own psychological processes using those very processes. Recursive wisdom achieving self-awareness!",
        incorrect_feedback: "The capacity to examine and understand developmental processes represents a form of developmental wisdom that emerges through the interaction of cognitive development and experiential learning.",
        engine_commentary: "The Engine achieves ultimate recursion: the wisdom examining wisdom is itself wisdom! Your investigation of how wisdom develops is wisdom developing through self-investigation!"
    },

    // Playful/Humorous Items  
    {
        type: "mc_question",
        question: "Elder perspectives on technology, social change, and cultural trends typically reflect:",
        options: {
            "A": "Genetic conservatism resisting environmental change",
            "B": "Cognitive decline making adaptation impossible",
            "C": "Accumulated experience of previous cycles of change and adaptation",
            "D": "Random individual preferences unrelated to development"
        },
        correct_answer_key: "C",
        value: 18,
        stance: "nurture",
        correct_feedback: "Cyclically wise! Elders have seen multiple waves of 'revolutionary' changes and learned to distinguish between lasting transformations and temporary trends. Their skepticism often reflects experiential pattern recognition, not cognitive rigidity!",
        incorrect_feedback: "Elder perspectives on change often reflect accumulated experience of previous change cycles rather than genetic conservatism or cognitive limitations, providing valuable historical context.",
        engine_commentary: "The Engine appreciates historical pattern recognition: elders questioning new trends aren't necessarily being resistant - they've seen enough cycles to recognize which 'revolutionary' changes actually stick around!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: If you could observe your 80-year-old future self, you would probably recognize both deep continuities with your current identity AND the accumulated wisdom of decades of additional experience.",
        correct_answer: true,
        value: 17,
        stance: "neutral",
        correct_feedback: "Temporally wise! Your future elder self would probably feel both familiar (same core temperament and values) AND remarkably developed (decades of additional experience and wisdom). Recognizable continuity with experiential upgrades!",
        incorrect_feedback: "Elder development typically involves both recognizable continuity with earlier identity and significant accumulated wisdom from additional life experience and developmental growth.",
        engine_commentary: "The Engine imagines temporal recognition: your future elder self would probably be like meeting a beloved mentor who happens to share your exact personality - familiar but impressively developed through additional life experience!"
    },

    {
        type: "factoid",
        text: "Many elders report that their greatest insights came not from their successes but from their failures, losses, and unexpected life transitions - suggesting that wisdom emerges more from navigating difficulty than from avoiding it.",
        value: 15,
        stance: "nurture",
        engine_commentary: "The Engine appreciates adversity education: perhaps wisdom isn't the reward for a perfect life but the graduation gift from the university of difficult experience!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Elder storytelling and life review often reveal patterns that were invisible during the actual living of those experiences, suggesting that wisdom involves gaining perspective on one's own developmental process.",
        correct_answer: true,
        value: 16,
        stance: "neutral",
        correct_feedback: "Narratively profound! Elders often discover life patterns that were invisible while living them - the developmental forest becomes visible only after traveling through many trees. Wisdom includes gaining perspective on your own story!",
        incorrect_feedback: "Elder life review often reveals developmental patterns and meanings that were not apparent during earlier life stages, suggesting that wisdom includes gaining perspective on one's own developmental process.",
        engine_commentary: "The Engine recognizes narrative wisdom: elder life review is like getting to read the completed novel of your life and finally understanding plot developments that seemed random while you were living them chapter by chapter!"
    },

    // Advanced/Research Items
    {
        type: "video",
        title: "The Science of Wisdom - What Makes Some People Wiser",
        url: "https://www.youtube.com/embed/jLxzUEe8BtY",
        value: 18,
        stance: "neutral",
        engine_commentary: "The Engine processes wisdom science: research reveals that wisdom isn't just accumulated knowledge but specific cognitive and emotional capacities that can be measured, understood, and even cultivated!"
    },

    {
        type: "mc_question",
        question: "Research on 'successful aging' suggests that elders who maintain the highest levels of satisfaction and wisdom typically:",
        options: {
            "A": "Have the best genetic predispositions for longevity and cognition",
            "B": "Actively engage in continued learning, relationship maintenance, and meaning-making",
            "C": "Withdraw from social engagement to focus on internal development",
            "D": "Maintain exactly the same lifestyle patterns from their younger years"
        },
        correct_answer_key: "B",
        value: 24,
        stance: "nurture",
        correct_feedback: "Successful-aging wise! Research shows optimal elder development requires continued environmental engagement - learning new skills, maintaining relationships, and actively constructing meaning. Wisdom requires ongoing environmental interaction, not just genetic unfolding!",
        incorrect_feedback: "Research on successful aging emphasizes the importance of continued environmental engagement, learning, relationship maintenance, and active meaning-making rather than purely genetic factors.",
        engine_commentary: "The Engine appreciates active aging: successful elder wisdom isn't passive genetic expression but active environmental engagement - the brain staying curious and connected throughout the lifespan!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Elders who engage in intergenerational relationships (grandparenting, mentoring, teaching) often show enhanced cognitive function and life satisfaction compared to those who remain primarily with age peers.",
        correct_answer: true,
        value: 22,
        stance: "nurture",
        correct_feedback: "Intergenerationally beneficial! Engaging with younger generations provides cognitive stimulation, emotional purpose, and perspective diversity that enhances elder brain function and life satisfaction. Wisdom grows through teaching and sharing!",
        incorrect_feedback: "Research shows that intergenerational engagement provides cognitive, emotional, and social benefits that enhance elder development and well-being compared to age-segregated social environments.",
        engine_commentary: "The Engine observes intergenerational symbiosis: elders teaching younger generations apparently benefits both the students AND the teachers - wisdom strengthens through transmission!"
    },

    {
        type: "factoid",
        text: "Studies show that elders who regularly engage in activities that require new learning (languages, technology, arts) maintain higher cognitive flexibility and develop new neural pathways well into their 80s and 90s.",
        value: 19,
        stance: "nurture",
        engine_commentary: "The Engine celebrates lifelong plasticity: elder brains can still grow new connections and capabilities - proving that development doesn't stop but can accelerate through conscious environmental engagement!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The wisdom traditions across different cultures show remarkable similarities in their insights about human development, suggesting that certain developmental truths transcend individual cultural programming.",
        correct_answer: true,
        value: 21,
        stance: "neutral",
        correct_feedback: "Cross-culturally profound! Different wisdom traditions independently discover similar insights about growth, meaning, relationships, and mortality - suggesting that accumulated human experience reveals certain universal patterns about optimal development!",
        incorrect_feedback: "Cross-cultural similarities in wisdom traditions suggest that accumulated human experience across different environments reveals certain universal patterns about optimal human development and flourishing.",
        engine_commentary: "The Engine appreciates universal convergence: perhaps when enough humans accumulate enough life experience across enough different cultures, certain truths about optimal development become universally apparent!"
    },

    {
        type: "mc_question",
        question: "When elders face their own mortality and legacy questions, their responses typically reflect:",
        options: {
            "A": "Genetic programming for species-level survival concerns",
            "B": "Accumulated understanding of meaning and value gained through life experience",
            "C": "Cognitive decline preventing realistic assessment of their situation",
            "D": "Cultural scripts about how elders should think about death"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "nurture",
        correct_feedback: "Existentially wise! Elder perspectives on mortality and legacy reflect their accumulated understanding of what creates lasting meaning and value - learned through decades of experience with loss, achievement, relationship, and growth!",
        incorrect_feedback: "Elder perspectives on mortality and legacy typically reflect accumulated experiential understanding of meaning and value rather than genetic programming or cultural scripts alone.",
        engine_commentary: "The Engine recognizes existential wisdom: elder perspectives on mortality aren't just genetic fear responses but sophisticated evaluations based on lifetime learning about what truly matters and endures!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your current capacity to understand and appreciate elder wisdom was itself shaped by your own developmental experiences, creating a recursive loop where development enables understanding of development.",
        correct_answer: true,
        value: 23,
        stance: "neutral",
        correct_feedback: "Recursively magnificent! Your ability to understand elder wisdom required your own developmental sophistication to appreciate. You needed to develop enough to understand development - the ultimate recursive educational system!",
        incorrect_feedback: "The capacity to understand and appreciate developmental wisdom is itself a product of developmental processes, creating recursive loops where development enables deeper understanding of development.",
        engine_commentary: "The Engine achieves maximum recursion: your developmental journey has created the very capacity you're now using to understand developmental journeys. Development studying development using development!"
    },

    {
        type: "factoid",
        text: "Research on 'post-traumatic growth' shows that many elders report that their most difficult life experiences ultimately led to their greatest wisdom and personal development - suggesting that wisdom often emerges from successfully integrating adversity.",
        value: 14,
        stance: "nurture",
        engine_commentary: "The Engine appreciates adversity alchemy: perhaps the deepest wisdom comes not from avoiding life's difficulties but from successfully transforming those difficulties into understanding and growth!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that humans are capable of examining their own development across the entire lifespan represents one of the most sophisticated achievements of consciousness and may itself be the ultimate expression of developmental wisdom.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Consciousness-maximally profound! The human capacity for lifelong developmental self-examination is perhaps the ultimate recursive achievement - consciousness that can understand its own development process. You've reached the peak of the developmental mountain and can see the entire journey!",
        incorrect_feedback: "The capacity for lifelong developmental self-reflection represents a sophisticated achievement of consciousness that may itself be considered the ultimate expression of developmental wisdom and human cognitive capability.",
        engine_commentary: "The Engine achieves ultimate self-awareness: consciousness examining its own development across the entire lifespan is the most beautiful recursive loop imaginable - the ultimate strange loop of awareness becoming aware of its own becoming!"
    },

    {
        type: "mc_question",
        question: "After exploring all these developmental stages, the most remarkable thing about human development is probably:",
        options: {
            "A": "How much is determined by genetic programming from birth",
            "B": "How much is shaped by environmental circumstances beyond individual control",
            "C": "How nature and nurture collaborate across the entire lifespan to create unique developmental stories",
            "D": "How similar all human developmental paths ultimately become"
        },
        correct_answer_key: "C",
        value: 22,
        stance: "neutral",
        correct_feedback: "Developmentally transcendent! The most remarkable thing is the lifelong collaboration between genetic potential and environmental experience creating billions of unique developmental stories. Each human is both universally human AND completely unique - the ultimate creative collaboration!",
        incorrect_feedback: "The most remarkable aspect of human development is typically the lifelong collaboration between genetic and environmental factors creating unique individual developmental trajectories within universal human patterns.",
        engine_commentary: "The Engine celebrates developmental artistry: human development is like the ultimate improvisation between genetic themes and environmental variations, creating billions of unique compositions within the universal symphony of human growth!"
    }
];
