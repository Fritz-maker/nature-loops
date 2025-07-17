// Add this at the very beginning of your rebels_paradox_content.js file
function getLoopContent() {
    return rebelsParadoxContent;
}

// This file contains the content pool for "The Rebel's Paradox" loop (Ages 13-19).
// It must be loaded BEFORE game_logic.js in your HTML.

const rebelsParadoxContent = [
    // Genetic Individualism Items (Nature-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Teenagers who rebel against their parents' values are expressing inborn drives for independence that would emerge regardless of family environment.",
        correct_answer: true,
        value: 23,
        stance: "nature",
        correct_feedback: "Genetically astute! Adolescent rebellion often reflects universal genetic programming for independence and identity formation. Your teenage defiance was biology expressing itself - evolution's way of launching you toward psychological autonomy!",
        incorrect_feedback: "Research shows that adolescent rebellion reflects genetic programming for independence that emerges across cultures and family styles. Your teenage resistance was actually evolutionary biology unfolding according to ancient genetic instructions!",
        engine_commentary: "The Engine observes developmental rebellion: genetic programs activating adolescent independence drives regardless of parental wishes. Your teenage self was following evolutionary scripts written long before your parents were born!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Teenagers from identical family backgrounds often develop completely different personalities and life paths due to environmental factors beyond parental control.",
        correct_answer: false,
        value: 21,
        stance: "nature",
        correct_feedback: "False! Even within similar environments, genetic differences between siblings create different personality trajectories. Your teenage identity reflected your unique genetic template expressing itself, not random environmental variation!",
        incorrect_feedback: "While environments matter, different outcomes in similar families often reflect genetic variation between siblings rather than random environmental factors. Each teenager's genetic blueprint creates different developmental paths!",
        engine_commentary: "The Engine recognizes sibling differentiation: genetic variation creating different adolescent trajectories even within identical family environments. Same nest, different birds following distinct genetic flight patterns."
    },

    {
        type: "mc_question",
        question: "When teenagers gravitate toward specific music, fashion, or social groups, this behavior primarily reflects:",
        options: {
            "A": "Random cultural trends with no deeper meaning",
            "B": "Genetic predispositions for certain aesthetic and social preferences",
            "C": "Pure peer pressure overriding individual preferences",
            "D": "Family values being expressed in youth culture"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "nature",
        correct_feedback: "Genetically insightful! Teenage cultural preferences often reflect inborn temperamental tendencies - sensation-seeking, social needs, aesthetic sensitivities. Your music taste and fashion choices were genetic personality expressing itself through available cultural options!",
        incorrect_feedback: "Research suggests that teenage cultural choices reflect genetic predispositions for certain types of stimulation, social interaction, and aesthetic experience rather than purely environmental influences.",
        engine_commentary: "The Engine notes cultural genetics: inborn preferences finding expression through available youth culture options. Your teenage style was your genetic personality shopping in the cultural marketplace!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Adolescents who show artistic, athletic, or academic talents during high school are primarily expressing genetic abilities that were always present.",
        correct_answer: true,
        value: 22,
        stance: "nature",
        correct_feedback: "Talent-wise! Adolescent abilities often represent genetic potential finally getting adequate expression through opportunity and maturation. Your high school talents were genetic gifts that had been waiting for the right developmental moment!",
        incorrect_feedback: "Research shows that teenage talent emergence often reflects genetic capacities reaching developmental readiness rather than purely environmental skill development. Innate abilities often flower during adolescence!",
        engine_commentary: "The Engine appreciates genetic timing: adolescence as the developmental stage when genetic potentials reach expression readiness, revealing abilities that were encoded but dormant."
    },

    {
        type: "factoid",
        text: "Identical twins raised apart often choose remarkably similar careers, hobbies, and relationship patterns during their teenage years, despite having no contact or knowledge of each other's choices.",
        value: 16,
        stance: "nature",
        engine_commentary: "The Engine marvels at genetic convergence: identical genetic programming creating similar life choices across separate environments. Twin teenagers following parallel paths written in shared DNA."
    },

    // Social Construction Items (Nurture-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Teenagers' identity formation is primarily shaped by peer groups, social media, and cultural messages rather than genetic predispositions.",
        correct_answer: true,
        value: 24,
        stance: "nurture",
        correct_feedback: "Socially sophisticated! Adolescent identity develops through intense interaction with peer culture, social expectations, and available identity scripts. Your teenage self was actively constructed through social processes and cultural influence!",
        incorrect_feedback: "Research shows that teenage identity formation is heavily influenced by peer relationships, cultural messages, and social environment. Adolescence is when social construction of identity reaches peak intensity!",
        engine_commentary: "The Engine recognizes social construction: adolescent identity as collaborative creation between individual potential and social environment. Your teenage self was a joint venture between you and your social world!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Teenagers who move to different cultural environments often show dramatic personality changes within months.",
        correct_answer: true,
        value: 19,
        stance: "nurture",
        correct_feedback: "Culturally astute! Teenage personality is highly responsive to environmental change. Moving to new cultural contexts can rapidly reshape identity, values, and behavior patterns. Your adolescent self was remarkably plastic!",
        incorrect_feedback: "Studies show that teenagers are particularly sensitive to cultural environmental changes, often showing rapid personality adaptation when moved to new social contexts during this formative period!",
        engine_commentary: "The Engine notes adolescent plasticity: teenage personality as responsive clay, rapidly reshaping when placed in new cultural environments. Identity formation as environmental sculpture!"
    },

    {
        type: "mc_question",
        question: "Research on teenagers who attend diverse vs. homogeneous schools shows:",
        options: {
            "A": "No differences because genetic personality overrides school environment",
            "B": "Diverse schools promote more flexible thinking and broader identity exploration",
            "C": "Homogeneous schools better support natural genetic development",
            "D": "School diversity has only temporary effects on personality"
        },
        correct_answer_key: "B",
        value: 25,
        stance: "nurture",
        correct_feedback: "Diversity-wise! Diverse school environments enhance cognitive flexibility and identity exploration during the crucial adolescent years. Your school's diversity (or lack thereof) was actively shaping your developing worldview and social skills!",
        incorrect_feedback: "Research shows that diverse educational environments during adolescence promote cognitive flexibility, perspective-taking, and broader identity exploration compared to homogeneous settings.",
        engine_commentary: "The Engine appreciates environmental diversity: varied social contexts serving as developmental catalysts that expand adolescent cognitive and social capacities through exposure to difference."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Teenagers who experience significant family disruption (divorce, relocation, economic stress) often show accelerated identity development compared to those in stable environments.",
        correct_answer: true,
        value: 26,
        stance: "nurture",
        correct_feedback: "Crisis-wise! Family disruption often accelerates identity formation by forcing teenagers to develop independence and self-reliance earlier. Environmental challenges can catalyze psychological growth and identity clarity!",
        incorrect_feedback: "Research suggests that while stressful, family disruption during adolescence often promotes accelerated identity development and independence, demonstrating environmental influence on developmental timing!",
        engine_commentary: "The Engine observes adversity as acceleration: environmental challenges forcing adolescent development into higher gear, creating early identity formation through necessity and adaptation."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Adolescents who participate in team sports develop different personality traits than those involved in individual artistic activities.",
        correct_answer: true,
        value: 18,
        stance: "nurture",
        correct_feedback: "Activity-wise! Different extracurricular environments develop different personality capacities - teamwork vs. individual expression, physical vs. creative skills. Your teenage activities were sculpting specific aspects of your developing personality!",
        incorrect_feedback: "Research shows that different adolescent activities promote different personality development - sports enhancing teamwork and competitiveness, arts developing creativity and individual expression.",
        engine_commentary: "The Engine recognizes activity-based development: teenage participation in different environmental niches cultivating distinct personality capacities through practice and social reinforcement."
    },

    {
        type: "factoid",
        text: "Teenagers who use social media heavily show different patterns of identity exploration and peer comparison than those with limited digital exposure, suggesting that technology actively shapes adolescent development.",
        value: 17,
        stance: "nurture",
        engine_commentary: "The Engine notes digital development: social media platforms serving as novel environments that reshape traditional patterns of adolescent identity formation and social comparison."
    },

    // Bridge/Integration Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: Teenage rebellion represents both genetic drives for independence AND response to specific family and cultural environments working together.",
        correct_answer: true,
        value: 27,
        stance: "neutral",
        correct_feedback: "Rebelliously brilliant! Adolescent rebellion emerges from genetic programming for independence interacting with specific family dynamics and cultural contexts. Your teenage defiance was a collaboration between biology and environment!",
        incorrect_feedback: "Teenage rebellion reflects both genetic drives for autonomy and environmental factors like family style and cultural expectations. Neither nature nor nurture alone explains adolescent independence-seeking!",
        engine_commentary: "The Engine appreciates rebellion as collaboration: genetic independence drives finding expression through environmental resistance opportunities. Biology and environment co-creating adolescent autonomy."
    },

    {
        type: "mc_question",
        question: "The most accurate way to understand teenage identity formation is:",
        options: {
            "A": "Genetic personality finally being free to express itself",
            "B": "Environmental influences completely overriding genetic tendencies",
            "C": "Genetic predispositions interacting with social environments to create unique identities",
            "D": "Random experimentation with no systematic patterns"
        },
        correct_answer_key: "C",
        value: 24,
        stance: "neutral",
        correct_feedback: "Identity-wise! Teenage identity emerges from genetic predispositions finding expression through available social environments and cultural opportunities. Your adolescent self was a unique collaboration between inherited potential and social possibility!",
        incorrect_feedback: "Adolescent identity formation represents the complex interaction between genetic temperamental tendencies and social environmental opportunities rather than either factor working alone.",
        engine_commentary: "The Engine recognizes identity as interaction: genetic potential and social environment collaborating to create unique adolescent identity patterns that neither could produce alone."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The specific ways teenagers rebel (through music, dress, friends, values) reflect both their inborn temperament AND the rebellion opportunities available in their culture.",
        correct_answer: true,
        value: 23,
        stance: "neutral",
        correct_feedback: "Culturally genetic! Rebellion style reflects genetic temperament (sensation-seeking, social needs) finding expression through available cultural options (music scenes, fashion, peer groups). Your rebellion was authentically you using cultural tools!",
        incorrect_feedback: "Research shows that teenage rebellion styles emerge from genetic predispositions interacting with cultural opportunities - temperament finding expression through available social options.",
        engine_commentary: "The Engine observes rebellion as translation: genetic temperamental tendencies finding expression through culturally available forms of adolescent resistance and identity exploration."
    },

    // NEW CONTENT - Additional T/F Questions (need 5 more false for balance: total 10T/6F)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Teenagers who date extensively during high school always have more genetic predisposition for social behavior than those who remain single.",
        correct_answer: false,
        value: 20,
        stance: "nurture",
        correct_feedback: "False! Dating patterns often reflect environmental factors like social opportunities, family rules, cultural expectations, and peer pressure more than genetic social tendencies. Social context shapes romantic behavior!",
        incorrect_feedback: "Research shows that teenage dating patterns reflect environmental factors like opportunity, family values, and cultural norms as much as genetic social predispositions. Context matters for romantic development!",
        engine_commentary: "The Engine distinguishes opportunity from inclination: teenage romantic behavior emerging from complex interaction of social environment and individual readiness rather than simple genetic programming."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Adolescents who get into trouble with authority figures are always expressing genetic predispositions for antisocial behavior.",
        correct_answer: false,
        value: 22,
        stance: "nurture",
        correct_feedback: "False! Teenage conflicts with authority often reflect environmental factors like inconsistent rules, peer pressure, stress, or mismatch between individual needs and institutional expectations rather than genetic antisocial tendencies!",
        incorrect_feedback: "Most teenage authority conflicts reflect environmental factors like school policies, family stress, peer influence, or institutional mismatches rather than inherent antisocial genetic programming!",
        engine_commentary: "The Engine recognizes contextual rebellion: teenage authority conflicts often representing environmental friction rather than genetic deviance. System problems masquerading as individual pathology."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Teenagers who excel academically in high school will inevitably succeed in college regardless of the environmental support they receive.",
        correct_answer: false,
        value: 21,
        stance: "nurture",
        correct_feedback: "False! College success depends heavily on environmental factors like financial support, social integration, academic preparation, and institutional fit. High school success doesn't guarantee college adaptation!",
        incorrect_feedback: "Research shows that college success requires environmental support beyond high school achievement - financial resources, social integration, appropriate academic preparation, and institutional match all matter!",
        engine_commentary: "The Engine appreciates transition complexity: academic ability requiring appropriate environmental scaffolding for expression. Talent needing supportive contexts to flourish."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Adolescents who seem to have 'perfect' personalities and never cause problems are always expressing their authentic genetic temperament.",
        correct_answer: false,
        value: 19,
        stance: "nurture",
        correct_feedback: "False! 'Perfect' teenage behavior sometimes reflects environmental pressure to conform, family expectations, or social anxiety rather than authentic personality expression. Compliance can mask rather than reveal true temperament!",
        incorrect_feedback: "Research suggests that overly compliant teenage behavior sometimes reflects environmental pressures or anxiety rather than authentic genetic personality expression. True temperament may be hidden by conformity!",
        engine_commentary: "The Engine recognizes conformity as concealment: environmental pressures sometimes suppressing authentic temperamental expression behind masks of perfect compliance and social acceptability."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Teenagers who change friend groups multiple times during high school lack stable genetic personality traits.",
        correct_answer: false,
        value: 18,
        stance: "nature",
        correct_feedback: "False! Social group changes often reflect normal exploration and development rather than genetic instability. Trying different friend groups can be healthy identity exploration, not personality deficiency!",
        incorrect_feedback: "Social group changes during adolescence typically reflect healthy exploration and development rather than genetic personality instability. Friendship experimentation is often adaptive identity development!",
        engine_commentary: "The Engine appreciates social exploration: friendship changes representing healthy adolescent development rather than genetic instability. Identity formation requiring social experimentation."
    },

    // NEW CONTENT - Additional MC Questions (need 5 more)
    {
        type: "mc_question",
        question: "A teenager becomes passionate about environmental activism after a school field trip to a polluted area. This transformation most likely reflects:",
        options: {
            "A": "Genetic programming for environmental concern finally being activated",
            "B": "Environmental exposure triggering latent moral sensitivities",
            "C": "Peer pressure forcing artificial interest in environmental issues",
            "D": "Random teenage experimentation with different identities"
        },
        correct_answer_key: "B",
        value: 23,
        stance: "nurture",
        correct_feedback: "Environmentally insightful! Direct environmental exposure often triggers moral and social awareness that might not have developed otherwise. Your environmental consciousness was awakened by environmental reality!",
        incorrect_feedback: "This pattern shows how environmental exposure can activate moral sensitivities and social awareness that might remain dormant without direct experience. Context creating conscience!",
        engine_commentary: "The Engine recognizes moral awakening: environmental exposure serving as catalyst for ethical development that might not emerge without direct experiential triggers."
    },

    {
        type: "mc_question",
        question: "Research on teenagers who attend summer camps shows they often:",
        options: {
            "A": "Maintain exactly the same personality patterns as at home",
            "B": "Show genetic leadership abilities that were previously hidden",
            "C": "Develop new social skills and confidence in the camp environment",
            "D": "Revert to childhood behavioral patterns due to group living"
        },
        correct_answer_key: "C",
        value: 22,
        stance: "nurture",
        correct_feedback: "Camp-wise! New environments often promote personality development and skill acquisition that might not occur in familiar settings. Your summer camp experience was creating new capacities through environmental opportunity!",
        incorrect_feedback: "Research shows that novel environments like summer camps often promote new social skills and personality development through different environmental demands and opportunities!",
        engine_commentary: "The Engine appreciates environmental novelty: unfamiliar contexts providing opportunities for personality development and skill acquisition that familiar environments might not stimulate."
    },

    {
        type: "mc_question",
        question: "Teenagers who work part-time jobs during high school typically show:",
        options: {
            "A": "No personality changes because work just expresses existing traits",
            "B": "Genetic programming for work ethic finally being revealed",
            "C": "Development of responsibility and time management skills",
            "D": "Negative effects on academic performance with no benefits"
        },
        correct_answer_key: "C",
        value: 21,
        stance: "nurture",
        correct_feedback: "Work-wise! Employment during adolescence often develops specific personality capacities like responsibility, time management, and interpersonal skills. Your part-time job was building character through environmental demands!",
        incorrect_feedback: "Research shows that teenage employment often promotes development of responsibility, time management, and interpersonal skills through real-world environmental demands and expectations!",
        engine_commentary: "The Engine recognizes work as development: employment environments serving as training grounds for personality capacities that academic settings might not cultivate."
    },

    {
        type: "mc_question",
        question: "When teenagers from different socioeconomic backgrounds attend the same school, they often show:",
        options: {
            "A": "Genetic class differences that cannot be overcome by shared environment",
            "B": "Complete personality convergence due to identical school environment",
            "C": "Both maintained differences and some environmental convergence effects",
            "D": "Random personality patterns unrelated to background or current environment"
        },
        correct_answer_key: "C",
        value: 26,
        stance: "neutral",
        correct_feedback: "Socioeconomically sophisticated! Mixed-class environments create complex patterns where background differences persist while shared environment promotes some convergence. Both heritage and context shaping development!",
        incorrect_feedback: "This situation illustrates how both background factors and current environment influence teenage development, creating patterns of both difference and similarity in mixed socioeconomic settings!",
        engine_commentary: "The Engine appreciates class complexity: socioeconomic background and current environment both influencing adolescent development in overlapping but distinct ways."
    },

    {
        type: "mc_question",
        question: "Adolescents who discover unexpected talents (like comedy, leadership, or technical skills) during high school most likely represent:",
        options: {
            "A": "Genetic abilities that were completely dormant until adolescence",
            "B": "Environmental opportunities finally matching genetic potential",
            "C": "Random talent emergence with no predictable pattern",
            "D": "Artificial abilities created purely by educational environment"
        },
        correct_answer_key: "B",
        value: 24,
        stance: "neutral",
        correct_feedback: "Talent-emergence wise! Late-developing abilities often represent genetic potential finally meeting appropriate environmental opportunities. Your unexpected talents were genetic seeds waiting for the right environmental soil!",
        incorrect_feedback: "Research suggests that unexpected talent emergence often reflects genetic potential encountering appropriate environmental opportunities and support for development!",
        engine_commentary: "The Engine observes talent activation: genetic potential and environmental opportunity converging to reveal abilities that neither factor alone could have produced."
    },

    // Factoids (keep 4, remove 1 from original 5)
    {
        type: "factoid",
        text: "Teenagers who participate in student government or leadership roles often maintain increased civic engagement and leadership skills throughout their adult lives, suggesting that adolescent environmental experiences can have lasting personality effects.",
        value: 15,
        stance: "nurture",
        engine_commentary: "The Engine notes leadership as development: adolescent civic participation creating lasting personality capacities that persist beyond the original environmental context."
    },

    {
        type: "factoid",
        text: "Studies of teenagers who immigrate to new countries show rapid personality adaptation to cultural norms, while maintaining some core temperamental traits, demonstrating both environmental plasticity and genetic stability during adolescence.",
        value: 18,
        stance: "neutral",
        engine_commentary: "The Engine appreciates immigration as natural experiment: cultural transition revealing both the plasticity and stability of adolescent personality under environmental pressure."
    },

    {
        type: "factoid",
        text: "Adolescents who learn musical instruments during high school often show enhanced mathematical abilities and emotional regulation skills, suggesting that environmental enrichment can develop multiple personality capacities simultaneously.",
        value: 16,
        stance: "nurture",
        engine_commentary: "The Engine recognizes musical multiplication: instrumental learning serving as environmental catalyst for multiple personality capacity development beyond just musical skill."
    }
];
