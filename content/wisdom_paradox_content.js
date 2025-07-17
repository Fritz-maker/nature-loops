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
        question: "TRUE or FALSE: The wisdom that comes with age primarily represents the flowering of genetic cognitive and emotional capacities that mature over the entire lifespan.",
        correct_answer: true,
        value: 25,
        stance: "nature",
        correct_feedback: "Wisely genetic! Elder wisdom often reflects genetic cognitive and emotional capacities reaching full maturation after decades of development. Your wisdom represents genetic potential finally achieving its complete expression!",
        incorrect_feedback: "Research suggests that certain cognitive and emotional capacities continue maturing throughout the lifespan, with wisdom representing genetic potential reaching fuller expression in later years.",
        engine_commentary: "The Engine appreciates genetic maturation: wisdom as the late-flowering fruit of genetic cognitive and emotional capacities that required a lifetime to reach full development."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Elderly individuals who maintain cognitive sharpness into their 90s typically show genetic advantages in brain structure and function that protect against aging.",
        correct_answer: true,
        value: 24,
        stance: "nature",
        correct_feedback: "Cognitively genetic! Exceptional cognitive aging often reflects genetic advantages in brain structure, neurotransmitter function, and cellular repair mechanisms. Your cognitive longevity was written in your genetic code!",
        incorrect_feedback: "Studies show that exceptional cognitive aging is often associated with genetic factors that protect brain function and structure throughout the aging process.",
        engine_commentary: "The Engine recognizes genetic protection: certain genetic variants serving as cognitive insurance policies that maintain mental sharpness despite chronological aging."
    },

    {
        type: "mc_question",
        question: "When elderly individuals show remarkable creativity or productivity in their later years, this most likely reflects:",
        options: {
            "A": "Environmental opportunities finally matching genetic potential",
            "B": "Pure environmental stimulation creating new abilities",
            "C": "Genetic creative capacities reaching peak expression with age",
            "D": "Random late-life changes with no systematic explanation"
        },
        correct_answer_key: "C",
        value: 23,
        stance: "nature",
        correct_feedback: "Creatively genetic! Late-life creativity often represents genetic creative capacities reaching peak expression as inhibitions decrease and experience accumulates. Your elder creativity is genetic potential achieving full flowering!",
        incorrect_feedback: "Research suggests that late-life creativity often reflects genetic creative capacities reaching optimal expression through reduced social constraints and accumulated experience.",
        engine_commentary: "The Engine observes creative liberation: genetic creative potential finally freed from earlier social constraints and performance pressures, achieving authentic expression in later life."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Personality traits that emerge or strengthen in older adults (like increased kindness or patience) typically reflect genetic temperamental changes that occur with aging.",
        correct_answer: true,
        value: 22,
        stance: "nature",
        correct_feedback: "Temperamentally mature! Age-related personality changes often reflect genetic programming for different trait expression across the lifespan. Your increased patience and kindness may be genetic gifts of aging!",
        incorrect_feedback: "Research shows that certain personality changes with aging often reflect genetic programming for different temperamental expression at different life stages.",
        engine_commentary: "The Engine appreciates genetic scheduling: different temperamental programs activating at different life stages, with elder kindness and patience representing genetic gifts of maturity."
    },

    {
        type: "factoid",
        text: "Centenarians often share similar personality traits - optimism, resilience, and social engagement - regardless of their diverse cultural backgrounds, suggesting genetic factors in exceptional longevity.",
        value: 18,
        stance: "nature",
        engine_commentary: "The Engine notes longevity genetics: exceptional aging associated with consistent personality patterns across cultures, suggesting genetic foundations for both lifespan and psychological resilience."
    },

    // Experiential Wisdom Items (Nurture-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: The wisdom of older adults primarily represents the accumulated result of environmental learning, cultural transmission, and reflective processing over many decades.",
        correct_answer: true,
        value: 26,
        stance: "nurture",
        correct_feedback: "Experientially wise! Elder wisdom emerges from decades of environmental learning, cultural absorption, and reflective processing of life experiences. Your wisdom is the accumulated treasure of environmental interaction!",
        incorrect_feedback: "Research shows that wisdom development primarily involves environmental learning, cultural transmission, and reflective processing of experiences accumulated over the lifespan.",
        engine_commentary: "The Engine recognizes wisdom as accumulation: decades of environmental interaction and cultural learning crystallizing into practical knowledge and emotional understanding."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Elderly individuals who remain intellectually active through reading, learning, and social engagement show better cognitive preservation than those who are less environmentally stimulated.",
        correct_answer: true,
        value: 23,
        stance: "nurture",
        correct_feedback: "Environmentally protective! Intellectual engagement and social stimulation help preserve cognitive function in aging. Your environmental choices about mental activity directly influence your cognitive longevity!",
        incorrect_feedback: "Studies consistently show that environmental intellectual stimulation and social engagement help preserve cognitive function throughout the aging process.",
        engine_commentary: "The Engine appreciates environmental protection: active environmental engagement serving as cognitive insurance, helping maintain mental function through stimulation and challenge."
    },

    {
        type: "mc_question",
        question: "Research on older adults who learn new skills (like technology or languages) shows they:",
        options: {
            "A": "Cannot develop new abilities due to genetic aging constraints",
            "B": "Show environmental neuroplasticity that enables continued learning",
            "C": "Only express genetic abilities that were always present",
            "D": "Experience temporary changes that quickly disappear"
        },
        correct_answer_key: "B",
        value: 24,
        stance: "nurture",
        correct_feedback: "Plastically environmental! Older adult brains maintain remarkable neuroplasticity that enables new learning when provided with appropriate environmental challenge and support. Your aging brain stays changeable!",
        incorrect_feedback: "Research demonstrates that older adult brains retain significant neuroplasticity that enables new learning and skill development through environmental stimulation and practice.",
        engine_commentary: "The Engine celebrates neural persistence: aging brains maintaining environmental responsiveness and learning capacity, proving that development never truly ends."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Older adults who engage in mentoring or teaching roles often show enhanced cognitive function and emotional well-being compared to those who remain socially isolated.",
        correct_answer: true,
        value: 21,
        stance: "nurture",
        correct_feedback: "Socially cognitive! Teaching and mentoring create environmental demands that enhance cognitive function and emotional satisfaction. Your social engagement was actively protecting and enhancing your mental abilities!",
        incorrect_feedback: "Studies show that mentoring and teaching roles provide environmental cognitive stimulation and social connection that enhance mental function and emotional well-being in older adults.",
        engine_commentary: "The Engine recognizes social cognition: teaching and mentoring roles providing environmental cognitive exercise that maintains and enhances mental function through social engagement."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Cultural differences in how societies treat and value elderly individuals significantly impact the psychological well-being and cognitive function of older adults.",
        correct_answer: true,
        value: 25,
        stance: "nurture",
        correct_feedback: "Culturally impactful! Societal attitudes toward aging create environmental contexts that profoundly influence elder well-being and cognitive function. Your cultural environment shapes your aging experience!",
        incorrect_feedback: "Research shows that cultural attitudes and treatment of elderly individuals significantly impact their psychological well-being, cognitive function, and overall aging experience.",
        engine_commentary: "The Engine appreciates cultural aging: societal values and treatment creating environmental contexts that can either enhance or diminish the psychological experience of growing older."
    },

    {
        type: "factoid",
        text: "Older adults who maintain strong social networks and community connections show significantly lower rates of cognitive decline and depression, demonstrating the protective power of environmental social engagement.",
        value: 17,
        stance: "nurture",
        engine_commentary: "The Engine notes social protection: environmental social connection serving as powerful medicine against cognitive decline and emotional distress in aging."
    },

    // Bridge/Integration Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: The wisdom that develops in later life represents the unique collaboration between genetic cognitive capacities and accumulated environmental learning working together over many decades.",
        correct_answer: true,
        value: 28,
        stance: "neutral",
        correct_feedback: "Wisely collaborative! Elder wisdom emerges from genetic cognitive potential interacting with decades of environmental learning and experience. Your wisdom is the masterpiece of nature and nurture working together across a lifetime!",
        incorrect_feedback: "Wisdom development involves both genetic cognitive capacities and environmental learning working together over the entire lifespan rather than either factor alone.",
        engine_commentary: "The Engine celebrates wisdom as synthesis: genetic cognitive potential and environmental learning collaborating across decades to create the unique understanding that emerges in later life."
    },

    {
        type: "mc_question",
        question: "The most accurate way to understand successful aging is:",
        options: {
            "A": "Genetic advantages simply overcoming environmental challenges",
            "B": "Environmental factors completely determining aging outcomes",
            "C": "Genetic resilience and environmental support working together optimally",
            "D": "Random luck with no predictable patterns or influences"
        },
        correct_answer_key: "C",
        value: 27,
        stance: "neutral",
        correct_feedback: "Aging-wise! Successful aging emerges from genetic resilience factors meeting supportive environmental conditions. Your optimal aging requires both good genetic fortune AND good environmental choices!",
        incorrect_feedback: "Research on successful aging shows that both genetic factors and environmental conditions contribute to optimal aging outcomes through their interaction.",
        engine_commentary: "The Engine recognizes aging optimization: genetic resilience and environmental support combining to create the best possible aging outcomes through collaborative advantage."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you are contemplating the nature of wisdom and development right now demonstrates how genetic capacity for self-reflection and environmental learning continue to interact throughout the lifespan.",
        correct_answer: true,
        value: 29,
        stance: "neutral",
        correct_feedback: "Meta-wisely profound! Your current reflection represents genetic self-awareness capacity engaging with environmental learning opportunities to understand development itself. You are wisdom examining its own creation!",
        incorrect_feedback: "This contemplation demonstrates the ongoing interaction between genetic capacities for self-reflection and environmental learning opportunities throughout the entire lifespan.",
        engine_commentary: "The Engine achieves recursive recognition: consciousness using genetic self-awareness and environmental knowledge to understand the very processes that created consciousness itself. The ultimate developmental paradox!"
    },

    // NEW CONTENT - Additional T/F Questions (need 4 more FALSE to reach 10T/6F balance)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Elderly individuals who develop dementia or cognitive decline always had genetic predispositions that made this outcome inevitable regardless of their lifestyle choices.",
        correct_answer: false,
        value: 20,
        stance: "nurture",
        correct_feedback: "False! While genetics matter, lifestyle factors like exercise, social engagement, and mental stimulation can significantly influence cognitive aging outcomes. Environmental choices can modify genetic risk throughout life!",
        incorrect_feedback: "Research shows that environmental factors like physical activity, social engagement, and intellectual stimulation can significantly influence cognitive aging outcomes even in the presence of genetic risk factors!",
        engine_commentary: "The Engine recognizes risk modification: environmental lifestyle choices serving as protective factors that can delay or prevent cognitive decline even when genetic vulnerabilities exist."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Older adults who relocate to retirement communities always show personality changes that reflect the institutional environment rather than continued expression of their lifelong temperament.",
        correct_answer: false,
        value: 19,
        stance: "nature",
        correct_feedback: "False! While new environments influence behavior, core personality traits typically remain stable in later life. Environmental changes tend to bring out different aspects of existing temperament rather than creating new personality patterns!",
        incorrect_feedback: "Research shows that personality traits remain relatively stable in later life, with environmental changes typically revealing different facets of existing temperament rather than creating new personalities!",
        engine_commentary: "The Engine notes temperamental persistence: core personality patterns maintaining stability in later life while adapting expression to new environmental contexts and demands."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: All elderly individuals who achieve notable accomplishments in their later years were simply expressing talents they had always possessed but never had time to develop.",
        correct_answer: false,
        value: 22,
        stance: "nurture",
        correct_feedback: "False! While some late achievements reflect earlier talents, others emerge from new environmental opportunities, changed circumstances, or accumulated wisdom creating entirely new capacities. Age can birth genuine novelty!",
        incorrect_feedback: "Research suggests that late-life achievements can represent both expression of earlier talents AND development of genuinely new capacities through environmental opportunity and accumulated experience!",
        engine_commentary: "The Engine appreciates late development: aging sometimes creating entirely new capacities through environmental opportunity and wisdom accumulation rather than just revealing hidden talents."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Elderly people who maintain the same social and intellectual activities they enjoyed in midlife will inevitably age more successfully than those who develop new interests.",
        correct_answer: false,
        value: 18,
        stance: "nurture",
        correct_feedback: "False! Successful aging can involve either continuity or change in activities. Some people thrive by maintaining familiar patterns while others benefit from new environmental challenges and interests. Optimal aging is individual!",
        incorrect_feedback: "Research shows that successful aging can involve either activity continuity or change, with different patterns working better for different individuals based on their circumstances and preferences!",
        engine_commentary: "The Engine recognizes aging diversity: multiple pathways to successful aging, with both continuity and change strategies capable of producing positive outcomes depending on individual factors."
    },

    // NEW CONTENT - Additional MC Questions (need 5 more)
    {
        type: "mc_question",
        question: "Elderly individuals who maintain active romantic relationships into their 80s and 90s typically show:",
        options: {
            "A": "Genetic predispositions for relationship longevity that others lack",
            "B": "Environmental benefits of social connection and emotional support",
            "C": "Both genetic relationship capacity and environmental relationship skills",
            "D": "No systematic differences from those without romantic relationships"
        },
        correct_answer_key: "C",
        value: 26,
        stance: "neutral",
        correct_feedback: "Romantically integrated! Long-term relationship success reflects both genetic capacity for emotional connection AND environmental development of relationship skills over decades. Love is both nature and nurture!",
        incorrect_feedback: "Research suggests that successful long-term relationships involve both genetic emotional and social capacities AND environmental development of relationship skills and wisdom!",
        engine_commentary: "The Engine celebrates romantic collaboration: long-term love representing both genetic capacity for deep connection and environmental learning of relationship wisdom across decades of partnership."
    },

    {
        type: "mc_question",
        question: "When older adults become grandparents, they often show personality changes such as increased patience and playfulness. This most likely reflects:",
        options: {
            "A": "Genetic programming for grandparent behavior finally activating",
            "B": "Environmental role demands creating new behavioral patterns",
            "C": "Both genetic capacity and environmental role adaptation working together",
            "D": "Temporary changes that disappear when grandchildren grow up"
        },
        correct_answer_key: "C",
        value: 24,
        stance: "neutral",
        correct_feedback: "Grandparentally wise! Grandparent behavior emerges from genetic capacity for caregiving interacting with environmental role demands and opportunities. Your grandparent self is both inherited potential and learned adaptation!",
        incorrect_feedback: "Grandparent role changes typically involve both genetic caregiving capacities and environmental adaptation to new role demands and opportunities!",
        engine_commentary: "The Engine recognizes generational recycling: genetic caregiving capacities reactivating in new environmental context, creating grandparent behaviors through nature-nurture collaboration."
    },

    {
        type: "mc_question",
        question: "Older adults who take up entirely new hobbies or interests in retirement typically:",
        options: {
            "A": "Express genetic talents that were suppressed during working years",
            "B": "Show environmental neuroplasticity enabling new learning",
            "C": "Demonstrate both latent abilities and learning capacity",
            "D": "Experience temporary enthusiasm that quickly fades"
        },
        correct_answer_key: "C",
        value: 23,
        stance: "neutral",
        correct_feedback: "Hobby-wise! New retirement interests often reflect both latent genetic abilities finding expression AND environmental learning capacity remaining active. Your retirement exploration uses both hidden potential and ongoing plasticity!",
        incorrect_feedback: "New retirement activities typically involve both expression of previously unexplored abilities AND demonstration of continued environmental learning capacity in later life!",
        engine_commentary: "The Engine appreciates retirement revelation: new activities revealing both hidden genetic potential and continued environmental learning capacity, proving development continues throughout life."
    },

    {
        type: "mc_question",
        question: "Research on elderly individuals who live to 100+ shows they typically:",
        options: {
            "A": "Have purely genetic advantages with lifestyle factors being irrelevant",
            "B": "Achieved longevity purely through environmental lifestyle choices",
            "C": "Combine genetic longevity factors with beneficial environmental choices",
            "D": "Represent random statistical outliers with no systematic patterns"
        },
        correct_answer_key: "C",
        value: 25,
        stance: "neutral",
        correct_feedback: "Centenarian-wise! Exceptional longevity typically involves both genetic advantages AND beneficial environmental choices working together. Your path to 100 would require both good genes and good choices!",
        incorrect_feedback: "Research on centenarians shows that exceptional longevity typically involves both genetic factors and environmental lifestyle choices contributing to extended healthspan!",
        engine_commentary: "The Engine recognizes longevity collaboration: genetic advantages and environmental choices working together to achieve exceptional lifespan and healthspan outcomes."
    },

    {
        type: "mc_question",
        question: "Elderly individuals who maintain sharp memories for distant events while forgetting recent information most likely demonstrate:",
        options: {
            "A": "Genetic memory systems that prioritize long-term over short-term storage",
            "B": "Environmental effects of reduced recent stimulation on memory formation",
            "C": "Normal aging patterns affecting different memory systems differently",
            "D": "Early signs of pathological cognitive decline requiring intervention"
        },
        correct_answer_key: "C",
        value: 21,
        stance: "neutral",
        correct_feedback: "Memory-wise! This pattern reflects normal aging effects on different memory systems - procedural and remote memories often remaining stable while new memory formation becomes more challenging. Natural aging has its own logic!",
        incorrect_feedback: "This memory pattern represents normal aging effects that impact different memory systems differently rather than indicating either purely genetic or environmental factors!",
        engine_commentary: "The Engine recognizes memory architecture: aging affecting different memory systems according to their neural foundations and usage patterns, creating the characteristic memory landscape of later life."
    },

    // Factoids (keep 4, remove 1 from original 5)
    {
        type: "factoid",
        text: "Older adults who engage in intergenerational activities (teaching children, mentoring young people) show enhanced cognitive function and life satisfaction, demonstrating how environmental social engagement benefits aging.",
        value: 16,
        stance: "nurture",
        engine_commentary: "The Engine appreciates generational connection: intergenerational interaction serving as cognitive and emotional medicine that enhances elder well-being through environmental social engagement."
    },

    {
        type: "factoid",
        text: "Some cognitive abilities like vocabulary and general knowledge continue improving into the 70s and 80s, showing that certain types of intelligence benefit from environmental accumulation rather than declining with age.",
        value: 19,
        stance: "nurture",
        engine_commentary: "The Engine recognizes crystallized growth: accumulated environmental learning creating cognitive advantages that increase rather than decrease with age, proving some mental abilities improve through experience."
    },

    {
        type: "factoid",
        text: "Elderly individuals who maintain a sense of purpose and meaning in life show better physical health and cognitive function, suggesting that psychological environmental factors influence biological aging processes.",
        value: 20,
        stance: "nurture",
        engine_commentary: "The Engine notes purpose as medicine: psychological meaning and environmental purpose serving as powerful biological protective factors that influence the actual aging process itself."
    }
];
