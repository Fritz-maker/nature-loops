// Add this at the very beginning of your choice_architect_content.js file
function getLoopContent() {
    return choiceArchitectContent;
}

// This file contains the content pool for "The Choice Architect" loop (Ages 20-35).
// It must be loaded BEFORE game_logic.js in your HTML.

const choiceArchitectContent = [
    // Genetic Destiny Items (Nature-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Your career choice primarily reflects your childhood interests and natural abilities rather than random circumstances and social pressures.",
        correct_answer: false,
        value: 22,
        stance: "nurture",
        correct_feedback: "Surprisingly false! Research shows career paths are heavily influenced by random encounters, economic circumstances, family expectations, and available opportunities. That 'dream job' probably emerged from a complex web of environmental factors more than pure genetic calling!",
        incorrect_feedback: "Career development research reveals that professional paths are typically shaped more by circumstantial factors, social networks, economic opportunities, and cultural influences than by innate abilities or childhood interests alone.",
        engine_commentary: "The Engine appreciates career chaos theory: your professional identity probably emerged from a butterfly effect of random encounters, chance opportunities, and environmental pressures rather than genetic destiny unfolding according to plan!"
    },

    {
        type: "mc_question",
        question: "When young adults choose romantic partners, they are primarily influenced by:",
        options: {
            "A": "Genetic programming for optimal mate selection",
            "B": "Conscious rational evaluation of compatibility factors",
            "C": "Unconscious patterns learned from early attachment experiences",
            "D": "Random attraction that can't be explained scientifically"
        },
        correct_answer_key: "C",
        value: 20,
        stance: "nurture",
        correct_feedback: "Attachment-wise! Your romantic choices largely reflect unconscious templates formed in early relationships - how your caregivers loved you, what felt 'familiar' in relationships, and learned patterns of attraction and bonding. Your heart follows childhood scripts!",
        incorrect_feedback: "Research shows that romantic partner selection is heavily influenced by early attachment patterns, family relationship models, and unconscious emotional templates rather than purely rational or genetic factors.",
        engine_commentary: "The Engine observes romantic archaeology: your dating preferences are like a museum of your early relationship experiences - you're unconsciously seeking partners who activate familiar emotional patterns from childhood!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: People who move far from their hometown for young adult opportunities usually develop personalities and values significantly different from those who stay local.",
        correct_answer: true,
        value: 18,
        stance: "nurture",
        correct_feedback: "Geographically astute! Environment continues shaping personality throughout young adulthood. Moving to different cultures, cities, or social environments can significantly alter values, social skills, risk tolerance, and identity - proving plasticity continues past adolescence!",
        incorrect_feedback: "Research demonstrates that geographic mobility and environmental changes during young adulthood can produce significant shifts in personality, values, and social behavior patterns.",
        engine_commentary: "The Engine notes environmental editing: your young adult environment didn't just provide opportunities - it continued rewriting your personality code based on new social demands, cultural values, and environmental challenges!"
    },

    {
        type: "factoid",
        text: "Identical twins who pursue different career paths often develop measurably different personality traits over time - the introvert who becomes a teacher may become more extraverted, while the extrovert who becomes a programmer may become more introverted.",
        value: 16,
        stance: "nurture",
        engine_commentary: "The Engine appreciates occupational evolution: your job didn't just express your personality - it actively sculptured your personality through daily practice of different social and cognitive skills!"
    },

    // Environmental Culmination Items (Nurture-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Your young adult financial decisions and money attitudes primarily reflect rational economic analysis rather than childhood family patterns around money.",
        correct_answer: false,
        value: 24,
        stance: "nurture",
        correct_feedback: "Financially psychological! Your money decisions are heavily influenced by family money scripts ('money is security,' 'money is evil,' 'there's never enough'), childhood experiences of scarcity or abundance, and learned emotional patterns around spending and saving. Your wallet has deep family roots!",
        incorrect_feedback: "Financial psychology research shows that money attitudes and behaviors are primarily shaped by family patterns, childhood experiences, and emotional associations rather than purely rational economic analysis.",
        engine_commentary: "The Engine observes monetary inheritance: your financial decisions aren't just about numbers - they're reenacting family dramas about security, worth, power, and love using money as the medium!"
    },

    {
        type: "mc_question",
        question: "Young adults who excel in their chosen fields typically share which characteristic:",
        options: {
            "A": "Superior genetic talent that was obvious from childhood",
            "B": "Consistent environmental support and developmental opportunities",
            "C": "Natural resistance to social pressures and expectations",
            "D": "Purely rational decision-making about career optimization"
        },
        correct_answer_key: "B",
        value: 21,
        stance: "nurture",
        correct_feedback: "Environmentally astute! Excellence typically requires accumulated environmental advantages - good early education, supportive mentors, financial resources, cultural capital, and networks that provide opportunities. Talent needs environmental soil to grow!",
        incorrect_feedback: "Research on expertise and achievement reveals that consistent environmental support, educational opportunities, mentorship, and resource access are typically more predictive of success than innate talent alone.",
        engine_commentary: "The Engine processes achievement ecology: your young adult accomplishments probably reflect the accumulation of environmental privileges and opportunities as much as any genetic gifts - success has deep systemic roots!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The values and beliefs you hold as a young adult are primarily the result of conscious reflection and rational analysis rather than absorption from social environment.",
        correct_answer: false,
        value: 19,
        stance: "nurture",
        correct_feedback: "Ideologically revealing! Most of your core values were absorbed unconsciously from family, peer groups, media, and cultural environment. We like to think our beliefs reflect rational analysis, but they're largely environmental inheritance wearing rational costumes!",
        incorrect_feedback: "Research shows that value formation is primarily influenced by social environment, cultural transmission, and unconscious absorption rather than conscious rational reflection, though people often believe their values are rationally derived.",
        engine_commentary: "The Engine observes belief archaeology: your passionate convictions about politics, morality, and life meaning can often be traced back to dinner table conversations and cultural messages you absorbed before you even knew you were learning!"
    },

    {
        type: "factoid",
        text: "Young adults who join military service, religious communities, or intensive career programs often experience rapid personality changes as they adapt to new environmental demands and social expectations.",
        value: 17,
        stance: "nurture",
        engine_commentary: "The Engine notes environmental reprogramming: intense young adult environments can literally rebuild personality within months - proving that identity is more plastic and environmentally responsive than most people realize!"
    },

    // Bridge/Integration Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: Your young adult life choices reflect both your accumulated genetic predispositions AND the culmination of all your previous environmental experiences working together.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Architecturally brilliant! Your life choices emerge from the complex interaction between genetic predispositions (temperament, cognitive styles, interests) and environmental programming (family values, cultural scripts, learned skills). You're a collaborative construction project!",
        incorrect_feedback: "Young adult decision-making reflects the accumulated interaction between genetic predispositions and environmental experiences across all previous developmental stages working together to shape current choices.",
        engine_commentary: "The Engine appreciates collaborative architecture: your life design isn't just genetic blueprint OR environmental programming - it's the unique result of how your inborn tendencies and environmental experiences have been collaborating since birth!"
    },

    {
        type: "mc_question",
        question: "The most accurate way to understand young adult choice-making is:",
        options: {
            "A": "Genetic personality finally free to express itself without childhood constraints",
            "B": "Environmental programming determining all major life decisions",
            "C": "Accumulated nature-nurture interactions creating unique decision-making patterns",
            "D": "Random external circumstances beyond personal control"
        },
        correct_answer_key: "C",
        value: 23,
        stance: "neutral",
        correct_feedback: "Choice-wise! Your decision-making style is the unique product of how your genetic predispositions and environmental experiences have been interacting throughout development. You choose with the brain that nature and nurture built together!",
        incorrect_feedback: "Young adult decision-making reflects the accumulated patterns created by lifelong interactions between genetic predispositions and environmental experiences rather than either factor alone.",
        engine_commentary: "The Engine models decision archaeology: every choice you make uses decision-making software that was collaboratively written by your genes and environment across decades of development!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The reason you're curious about human development right now reflects both your innate cognitive style AND your accumulated educational and cultural experiences that shaped your intellectual interests.",
        correct_answer: true,
        value: 20,
        stance: "neutral",
        correct_feedback: "Meta-architecturally perfect! Your current intellectual curiosity reflects genetic predispositions (pattern-seeking, abstract thinking) combined with environmental influences (education, cultural values about learning) that shaped your interests. Nature and nurture collaborating on curiosity!",
        incorrect_feedback: "Current intellectual interests typically reflect both genetic cognitive predispositions and accumulated environmental influences that shaped learning associations and intellectual development.",
        engine_commentary: "The Engine achieves recursive architecture: the developmental processes that created your capacity to think about development are the very processes you're now using to understand development. The architect studying the blueprint of the architect!"
    },

    // Playful/Humorous Items
    {
        type: "mc_question",
        question: "Your young adult living situation (tidy vs messy, minimalist vs maximalist, alone vs social) probably reflects:",
        options: {
            "A": "Your genetic predisposition to organization and social needs",
            "B": "Reaction to or continuation of your childhood family patterns",
            "C": "Current environmental pressures and resource availability",
            "D": "All of the above in a beautifully chaotic life-design stew"
        },
        correct_answer_key: "D",
        value: 18,
        stance: "neutral",
        correct_feedback: "Domestically sophisticated! Your living style reflects genetic tendencies (organization, social needs), family pattern responses (recreating or rebelling against childhood home), AND current practical constraints (money, location, roommates). Your space tells your whole developmental story!",
        incorrect_feedback: "Living preferences emerge from genetic predispositions, family pattern responses, current practical constraints, and environmental resources all working together.",
        engine_commentary: "The Engine appreciates spatial autobiography: your apartment or house is like a 3D representation of your entire developmental history - genetic preferences expressed through environmental constraints and family pattern responses!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: If you could observe your 25-year-old self making major life decisions, you would probably recognize both authentic personal preferences AND unconscious family/cultural programming happening simultaneously.",
        correct_answer: true,
        value: 17,
        stance: "neutral",
        correct_feedback: "Observationally wise! Your young adult self was probably both authentically expressing personal preferences AND unconsciously following family scripts and cultural programs. Real you wearing inherited decision-making software!",
        incorrect_feedback: "Young adult decision-making typically involves both authentic personal preference expression and unconscious enactment of inherited family and cultural patterns happening simultaneously.",
        engine_commentary: "The Engine imagines temporal recognition: your young adult self was like a DJ mixing their own authentic creative impulses with inherited tracks from family and culture - original music using borrowed instruments!"
    },

    {
        type: "factoid",
        text: "People who consciously try to 'break family patterns' in young adulthood often unconsciously recreate those same patterns in different forms - the daughter of a workaholic becomes an exercise-aholic, the son of an alcoholic becomes addicted to productivity.",
        value: 15,
        stance: "nurture",
        engine_commentary: "The Engine observes pattern persistence: your attempts to escape family programming often just translated the same underlying patterns into new domains - the form changed but the structure remained!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your current professional success (or struggles) can be partly traced back to the confidence and skills you developed (or didn't develop) in your earliest years.",
        correct_answer: true,
        value: 16,
        stance: "nurture",
        correct_feedback: "Professionally profound! Your work confidence, stress management, social skills, and achievement motivation all have roots in early developmental experiences. That job interview anxiety or natural leadership ability has deep biographical origins!",
        incorrect_feedback: "Professional development is significantly influenced by early experiences that shaped confidence, social skills, stress management, and achievement patterns that continue affecting career outcomes.",
        engine_commentary: "The Engine recognizes career archaeology: your workplace behavior is like an archaeological site containing layers of family dynamics, early school experiences, and childhood confidence-building (or confidence-undermining) experiences!"
    },

    // Advanced/Research Items
    {
        type: "video",
        title: "Emerging Adulthood - The New Life Stage",
        url: "https://www.youtube.com/embed/rJZXp4G_bZ4",
        value: 18,
        stance: "nurture",
        engine_commentary: "The Engine processes emerging adulthood: watching this new developmental stage reveals how modern environments have literally created new phases of human development - culture reshaping the life course itself!"
    },

    {
        type: "mc_question",
        question: "Research on 'emerging adulthood' (ages 18-29) suggests that this life stage is:",
        options: {
            "A": "A universal biological phase that has always existed",
            "B": "A culturally-created extension of adolescence in developed societies",
            "C": "Evidence of genetic programming for delayed adult responsibility",
            "D": "A temporary historical anomaly that will disappear"
        },
        correct_answer_key: "B",
        value: 24,
        stance: "nurture",
        correct_feedback: "Culturally insightful! Emerging adulthood is largely a product of modern economic and cultural conditions that allow extended exploration before adult commitments. Previous generations moved more directly from adolescence to adult roles - your 'quarter-life crisis' is historically novel!",
        incorrect_feedback: "Research shows that emerging adulthood is primarily a culturally-created life stage resulting from modern economic conditions, educational requirements, and cultural values rather than universal biological programming.",
        engine_commentary: "The Engine appreciates cultural life-stage creation: your extended young adult exploration phase was literally invented by modern culture - previous generations didn't have the luxury of finding themselves because survival demanded immediate adult responsibilities!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Young adults who have more choice options (career paths, relationship styles, life locations) often experience more anxiety and decision paralysis than those with fewer options.",
        correct_answer: true,
        value: 22,
        stance: "nurture",
        correct_feedback: "Choice-paradoxically accurate! Too many options can create decision paralysis, analysis paralysis, and choice regret. Your ancestors had fewer life path options but probably less existential anxiety about whether they were making 'optimal' choices!",
        incorrect_feedback: "Research reveals that excessive choice can create anxiety, decision paralysis, and dissatisfaction due to opportunity cost awareness and perfectionist pressure to optimize outcomes.",
        engine_commentary: "The Engine observes choice overload: your freedom to create any life you want paradoxically created the anxiety of possibly creating the wrong life - ultimate freedom as ultimate responsibility!"
    },

    {
        type: "factoid",
        text: "Young adults who move to urban environments often become more liberal in their values, while those who move to rural areas often become more conservative - environment continues actively shaping political and social attitudes.",
        value: 19,
        stance: "nurture",
        engine_commentary: "The Engine notes environmental politics: your political evolution didn't just reflect genetic predispositions - it responded to the social environment where you chose to build your adult life!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The relationships you form in young adulthood often recreate emotional dynamics from your childhood family, even when you consciously try to choose differently.",
        correct_answer: true,
        value: 21,
        stance: "nurture",
        correct_feedback: "Relationally recursive! We're unconsciously drawn to relationships that feel familiar, even if familiarity means recreating problematic patterns. Your dating history probably contains variations on themes from your family of origin!",
        incorrect_feedback: "Relationship research shows that people often unconsciously recreate familiar family dynamics in adult relationships, even when consciously intending to choose different patterns.",
        engine_commentary: "The Engine recognizes relational repetition: your adult relationships are like remixes of your childhood family songs - same emotional themes with different instruments and lyrics!"
    },

    {
        type: "mc_question",
        question: "When young adults make major life transitions (marriage, career changes, parenthood), they typically:",
        options: {
            "A": "Rely purely on rational planning and objective analysis",
            "B": "Follow genetic programming for optimal life timing",
            "C": "Unconsciously use family and cultural scripts as guides",
            "D": "Make completely random choices based on immediate circumstances"
        },
        correct_answer_key: "C",
        value: 20,
        stance: "nurture",
        correct_feedback: "Transitionally wise! Major life transitions often trigger unconscious family and cultural programming - you find yourself following (or deliberately avoiding) patterns you observed growing up. Your 'original' life choices often use inherited templates!",
        incorrect_feedback: "Research shows that major life transitions typically activate family and cultural scripts that guide decision-making, even when people believe they're making independent choices.",
        engine_commentary: "The Engine appreciates transition templates: your major life changes probably followed invisible family and cultural blueprints you didn't even realize you had downloaded from childhood observation!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your young adult capacity for intimate relationships was significantly shaped by how your early caregivers managed emotional attunement and conflict resolution.",
        correct_answer: true,
        value: 23,
        stance: "nurture",
        correct_feedback: "Intimately developmental! Your adult relationship skills - emotional regulation, conflict resolution, empathy, trust - all have roots in your earliest relational experiences. How your caregivers loved you is still influencing how you love others!",
        incorrect_feedback: "Adult relationship capacity is significantly influenced by early attachment experiences, emotional regulation modeling, and conflict resolution patterns learned in the family of origin.",
        engine_commentary: "The Engine recognizes relational inheritance: your adult love style is like a relationship language you learned in childhood - the grammar of intimacy passed down through generations of family emotional patterns!"
    },

    {
        type: "factoid",
        text: "Young adults who engage in regular self-reflection and therapy often experience significant personality changes, suggesting that conscious environmental intervention can override unconscious patterns well into adulthood.",
        value: 14,
        stance: "neutral",
        engine_commentary: "The Engine appreciates conscious reprogramming: your adult brain can actually edit its own inherited programming through conscious environmental choices like therapy, mindfulness, and intentional relationship work!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you're engaging with content about development suggests that you're actively participating in your own continued development rather than just passively expressing fixed traits.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Meta-developmentally excellent! Your curiosity about development IS development - you're actively engaging in the process of understanding and potentially reshaping your own psychological patterns. Self-awareness as self-modification technology!",
        incorrect_feedback: "Engagement with developmental content represents active participation in ongoing development through increased self-awareness and potential for conscious pattern modification.",
        engine_commentary: "The Engine achieves developmental recursion: your exploration of how development works is itself a developmental activity that may change how future development unfolds. The student of development becoming a conscious co-author of development!"
    },

    {
        type: "mc_question",
        question: "Looking back at your young adult choice-making, the most remarkable thing is probably:",
        options: {
            "A": "How much your choices reflected your authentic genetic personality",
            "B": "How much your choices were determined by external circumstances",
            "C": "How your unique history of nature-nurture interactions created distinctive choice patterns",
            "D": "How similar your choices were to others from your background"
        },
        correct_answer_key: "C",
        value: 22,
        stance: "neutral",
        correct_feedback: "Architecturally profound! The most amazing thing is probably how your unique developmental history created a distinctive choice-making style that's both authentically yours AND clearly influenced by your genetic and environmental heritage. You're a custom-built choice architect!",
        incorrect_feedback: "The most remarkable aspect of young adult development is typically how individual developmental history creates unique patterns of choice-making that reflect both personal authenticity and inherited influences.",
        engine_commentary: "The Engine celebrates choice architecture: your decision-making style is like a unique architectural signature created by the intersection of your genetic predispositions and environmental experiences - nobody else makes choices quite like you!"
    }
];
