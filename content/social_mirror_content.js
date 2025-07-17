// Add this at the very beginning of your social_mirror_content.js file
function getLoopContent() {
    return socialMirrorContent;
}

// This file contains the content pool for "The Social Mirror" loop (Ages 3-12).
// It must be loaded BEFORE game_logic.js in your HTML.

const socialMirrorContent = [
    // Innate Foundation Items (Nature-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Children's core personality traits and learning styles are primarily determined by genetic inheritance rather than environmental influences during the elementary school years.",
        correct_answer: true,
        value: 22,
        stance: "nature",
        correct_feedback: "Genetically astute! Elementary school years reveal genetic personality and cognitive patterns that persist throughout life. Your childhood temperament and learning style were genetic blueprints expressing themselves through early experiences!",
        incorrect_feedback: "Research shows that core personality traits and learning preferences have strong genetic components that become evident during childhood, even as environment shapes their expression.",
        engine_commentary: "The Engine observes genetic revelation: childhood as the stage when inborn temperament and cognitive style emerge clearly enough for others to recognize and respond to your essential nature."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children who excel in specific academic subjects typically show genetic predispositions for those areas that can be identified through brain imaging.",
        correct_answer: true,
        value: 24,
        stance: "nature",
        correct_feedback: "Neurogenetically brilliant! Brain imaging reveals that academic strengths often correlate with genetic neural architecture differences. Your childhood academic preferences reflected your brain's inborn structural advantages!",
        incorrect_feedback: "Studies using brain imaging show that academic aptitudes often reflect genetic differences in neural architecture that can be detected even in childhood.",
        engine_commentary: "The Engine appreciates neural specialization: genetic brain architecture creating academic advantages that manifest as childhood interests and abilities long before formal training begins."
    },

    {
        type: "mc_question",
        question: "When children from the same family show dramatically different personalities and abilities, this most likely reflects:",
        options: {
            "A": "Environmental factors overwhelming genetic similarities",
            "B": "Genetic variation between siblings expressing different traits",
            "C": "Birth order effects determining personality development",
            "D": "Random developmental accidents with no systematic cause"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "nature",
        correct_feedback: "Sibling-wise! Genetic variation between siblings creates different personality and ability patterns even within identical family environments. Each child inherited a unique genetic combination that shapes their developmental path!",
        incorrect_feedback: "Research shows that sibling differences often reflect genetic variation rather than environmental factors, since siblings share similar environments but different genetic combinations.",
        engine_commentary: "The Engine recognizes genetic individuality: each child receiving a unique genetic lottery ticket that creates different personality and ability trajectories within the same family environment."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children who are naturally shy or outgoing maintain these basic temperamental patterns throughout their school years regardless of social experiences.",
        correct_answer: true,
        value: 18,
        stance: "nature",
        correct_feedback: "Temperamentally true! Basic shyness or sociability patterns show remarkable stability throughout childhood. Your fundamental social temperament was already established and remained consistent despite varying social experiences!",
        incorrect_feedback: "Research demonstrates that basic temperamental patterns like shyness or sociability show strong stability throughout the childhood years, even across different social environments.",
        engine_commentary: "The Engine notes temperamental persistence: social baseline patterns remaining stable while surface behaviors adapt to different environmental demands and opportunities."
    },

    {
        type: "factoid",
        text: "Identical twins raised apart often choose similar hobbies, sports, and academic interests during childhood, even when their adoptive families have completely different values and opportunities.",
        value: 16,
        stance: "nature",
        engine_commentary: "The Engine marvels at genetic preference expression: identical DNA creating similar childhood interests across completely different environmental contexts and family cultures."
    },

    // Cultural Transmission Items (Nurture-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Children's values, beliefs, and social attitudes are primarily shaped by family culture and environmental influences rather than genetic predispositions.",
        correct_answer: true,
        value: 23,
        stance: "nurture",
        correct_feedback: "Culturally sophisticated! Values and beliefs are largely transmitted through family environment, cultural exposure, and social learning. Your childhood worldview was actively constructed through environmental programming!",
        incorrect_feedback: "Research shows that values, beliefs, and social attitudes are primarily learned through environmental transmission rather than genetic inheritance during the crucial childhood years.",
        engine_commentary: "The Engine recognizes cultural programming: childhood as the prime window for value transmission when environmental influences have maximal impact on belief system formation."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children who move between different cultural environments during their school years often show remarkable adaptability in developing new social skills and cultural competencies.",
        correct_answer: true,
        value: 21,
        stance: "nurture",
        correct_feedback: "Culturally adaptive! Childhood brain plasticity enables rapid cultural learning and social skill development. Your ability to adapt to new cultural environments was environmental sculpting in action!",
        incorrect_feedback: "Studies show that children demonstrate exceptional cultural adaptability, rapidly acquiring new social skills and cultural competencies when environmental contexts change.",
        engine_commentary: "The Engine appreciates childhood plasticity: young brains optimized for cultural learning, rapidly acquiring appropriate social behaviors for whatever environmental context they encounter."
    },

    {
        type: "mc_question",
        question: "Research on children from bilingual households shows they typically:",
        options: {
            "A": "Struggle academically due to language confusion",
            "B": "Show enhanced cognitive flexibility and problem-solving skills",
            "C": "Develop genetic advantages for language processing",
            "D": "Maintain exactly the same cognitive abilities as monolingual children"
        },
        correct_answer_key: "B",
        value: 25,
        stance: "nurture",
        correct_feedback: "Linguistically brilliant! Bilingual environments enhance cognitive flexibility by training the brain to manage multiple language systems. Your linguistic environment was upgrading your cognitive operating system!",
        incorrect_feedback: "Research demonstrates that bilingual environmental exposure enhances cognitive flexibility, problem-solving abilities, and mental agility beyond what monolingual environments provide.",
        engine_commentary: "The Engine recognizes linguistic enhancement: multilingual environments serving as cognitive training that develops mental flexibility and problem-solving capacities beyond language itself."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children's academic performance is more strongly influenced by family educational expectations and support than by genetic intellectual abilities.",
        correct_answer: true,
        value: 26,
        stance: "nurture",
        correct_feedback: "Educationally environmental! Family expectations and support systems often matter more than raw genetic ability for academic success. Your school performance reflected your family's educational culture as much as your innate capabilities!",
        incorrect_feedback: "Studies show that family educational culture, expectations, and support often have stronger effects on academic outcomes than genetic intellectual abilities alone.",
        engine_commentary: "The Engine observes educational amplification: family environmental factors serving as multipliers that can enhance or constrain genetic intellectual potential through expectation and support systems."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children who attend schools with different teaching philosophies (traditional vs. progressive) often develop different learning styles and academic approaches.",
        correct_answer: true,
        value: 19,
        stance: "nurture",
        correct_feedback: "Pedagogically wise! Educational environments actively shape learning approaches and academic strategies. Your school's teaching philosophy was programming your cognitive habits and learning preferences!",
        incorrect_feedback: "Research shows that different educational environments and teaching methods can shape children's learning approaches, study habits, and academic problem-solving strategies.",
        engine_commentary: "The Engine recognizes educational programming: teaching environments installing specific cognitive habits and learning strategies that become part of the child's intellectual toolkit."
    },

    {
        type: "factoid",
        text: "Children who participate in music programs show enhanced mathematical abilities and spatial reasoning skills, suggesting that environmental enrichment can develop cognitive capacities beyond the specific activity.",
        value: 17,
        stance: "nurture",
        engine_commentary: "The Engine notes cognitive cross-training: musical environmental exposure enhancing multiple cognitive domains through neuroplasticity and skill transfer effects."
    },

    // Bridge/Integration Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: Children's development represents a complex interaction between their genetic predispositions and their family, school, and cultural environments working together.",
        correct_answer: true,
        value: 27,
        stance: "neutral",
        correct_feedback: "Developmentally brilliant! Childhood development emerges from genetic potential interacting with environmental opportunities and constraints. Your childhood self was a collaborative creation between inheritance and experience!",
        incorrect_feedback: "Child development research consistently shows that genetic predispositions and environmental factors work together rather than either factor determining outcomes alone.",
        engine_commentary: "The Engine appreciates developmental collaboration: childhood as the stage when genetic potential and environmental influence most actively co-create the emerging personality and abilities."
    },

    {
        type: "mc_question",
        question: "The most accurate way to understand a child's academic and social success is:",
        options: {
            "A": "Genetic abilities finally getting proper environmental expression",
            "B": "Environmental factors completely overriding genetic limitations",
            "C": "Genetic potential being either supported or constrained by environmental quality",
            "D": "Random factors that cannot be predicted or influenced"
        },
        correct_answer_key: "C",
        value: 24,
        stance: "neutral",
        correct_feedback: "Success-wise! Environmental quality serves as either amplifier or constraint for genetic potential. Your childhood achievements reflected both your inherited abilities AND the environmental support available to develop them!",
        incorrect_feedback: "Child development research shows that environmental factors can either enhance or limit genetic potential rather than simply expressing predetermined abilities.",
        engine_commentary: "The Engine recognizes environmental modulation: genetic potential requiring appropriate environmental conditions for optimal expression, with environment serving as either catalyst or constraint."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The reason some children seem to effortlessly excel while others struggle reflects both their inborn abilities AND the quality of environmental support they receive.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Effortlessly insightful! Apparent ease reflects genetic ability meeting appropriate environmental support. Those 'naturally gifted' children had both genetic potential AND environmental conditions that allowed easy expression!",
        incorrect_feedback: "Research shows that childhood success emerges from genetic abilities finding appropriate environmental support rather than either factor working alone.",
        engine_commentary: "The Engine observes the ease illusion: effortless childhood performance representing optimal gene-environment fit rather than pure genetic superiority or environmental advantage."
    },

    // NEW CONTENT - Additional T/F Questions (need 4 more: 2T/2F to maintain balance)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Children who show artistic talents always had genetic predispositions that would have emerged regardless of environmental exposure to art.",
        correct_answer: false,
        value: 20,
        stance: "nurture",
        correct_feedback: "False! Artistic talents often require environmental exposure and training to develop. Without access to art materials, instruction, or cultural appreciation, genetic potential might never be discovered or expressed!",
        incorrect_feedback: "Research shows that artistic abilities often require environmental exposure and opportunity for development. Genetic potential needs environmental activation and support to become actual talent!",
        engine_commentary: "The Engine recognizes talent as collaboration: genetic potential requiring environmental exposure and support for discovery and development. Hidden abilities remaining hidden without appropriate contexts."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children from the same family who have different teachers always develop different academic abilities regardless of their genetic similarities.",
        correct_answer: false,
        value: 18,
        stance: "nature",
        correct_feedback: "False! While teachers matter, siblings often show similar academic patterns despite different teachers because genetic abilities create consistent learning strengths and challenges across different educational environments!",
        incorrect_feedback: "Research shows that genetic abilities often create consistent patterns across different educational environments. Teacher effects operate within the framework of genetic learning predispositions!",
        engine_commentary: "The Engine notes genetic consistency: similar genetic learning profiles creating recognizable patterns across different educational environments and teaching styles."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children who are raised by grandparents instead of parents develop fundamentally different personality traits due to generational differences in parenting styles.",
        correct_answer: true,
        value: 22,
        stance: "nurture",
        correct_feedback: "Generationally wise! Different parenting generations create different environmental influences that can shape personality development. Your grandparents' parenting style would have created different developmental pressures and opportunities!",
        incorrect_feedback: "Research suggests that generational differences in parenting approaches can influence child personality development through different environmental expectations and interaction styles.",
        engine_commentary: "The Engine appreciates generational variation: different historical cohorts bringing distinct parenting environments that shape child development through varied cultural values and practices."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children's emotional regulation abilities are primarily determined by genetic temperament and remain stable regardless of family emotional environment.",
        correct_answer: true,
        value: 21,
        stance: "nature",
        correct_feedback: "Emotionally genetic! Basic emotional regulation capacity has strong genetic components that create consistent patterns across different family environments. Your fundamental emotional style was already established by genetic temperament!",
        incorrect_feedback: "Research shows that basic emotional regulation abilities have significant genetic components that create stable individual differences in emotional response patterns.",
        engine_commentary: "The Engine recognizes emotional genetics: temperamental foundations creating consistent emotional regulation patterns that persist across varying family emotional environments."
    },

    // NEW CONTENT - Additional MC Questions (need 5 more)
    {
        type: "mc_question",
        question: "Children who excel in team sports versus individual activities typically show differences that reflect:",
        options: {
            "A": "Genetic predispositions for cooperation versus independence",
            "B": "Environmental training in different skill sets",
            "C": "Both genetic social tendencies and environmental skill development",
            "D": "Random variation with no systematic patterns"
        },
        correct_answer_key: "C",
        value: 23,
        stance: "neutral",
        correct_feedback: "Athletically integrated! Sports preferences reflect both genetic social tendencies (cooperation vs. independence) AND environmental skill development through different activity contexts. Nature and nurture collaborating in athletic development!",
        incorrect_feedback: "Athletic preferences emerge from both genetic social predispositions and environmental skill development through participation in different types of activities.",
        engine_commentary: "The Engine recognizes athletic gene-environment interaction: genetic social tendencies influencing activity choices, which then develop specific skills through environmental training and practice."
    },

    {
        type: "mc_question",
        question: "Research on children who change schools frequently shows they typically:",
        options: {
            "A": "Maintain stable personality patterns despite environmental changes",
            "B": "Develop enhanced social adaptability and flexibility",
            "C": "Show genetic resilience factors that protect against disruption",
            "D": "Experience only negative effects from environmental instability"
        },
        correct_answer_key: "B",
        value: 24,
        stance: "nurture",
        correct_feedback: "Adaptively environmental! Frequent school changes often develop enhanced social skills and adaptability through necessity. Your environmental challenges were building social resilience and flexibility!",
        incorrect_feedback: "Studies show that frequent environmental changes can promote enhanced social adaptability and flexibility skills through repeated adaptation challenges.",
        engine_commentary: "The Engine appreciates adaptive development: environmental challenges serving as training for social flexibility and adaptation skills that become valuable life capacities."
    },

    {
        type: "mc_question",
        question: "Children who participate in competitive academics (spelling bees, math competitions) often show:",
        options: {
            "A": "Pure genetic intellectual superiority over non-participants",
            "B": "Environmental training effects that enhance specific cognitive skills",
            "C": "Both genetic abilities and environmental skill development",
            "D": "No lasting effects beyond the specific competition skills"
        },
        correct_answer_key: "C",
        value: 25,
        stance: "neutral",
        correct_feedback: "Competitively collaborative! Academic competition success reflects both genetic cognitive abilities AND environmental training that develops specific skills. Your academic competitions were genetic potential meeting environmental development!",
        incorrect_feedback: "Academic competition performance emerges from both genetic cognitive abilities and environmental training and practice in specific skill areas.",
        engine_commentary: "The Engine recognizes competitive development: genetic cognitive potential being refined and enhanced through environmental training and competitive practice experiences."
    },

    {
        type: "mc_question",
        question: "When children from different cultural backgrounds attend the same school, they often:",
        options: {
            "A": "Completely lose their cultural identity due to school environment",
            "B": "Maintain cultural differences while developing shared school culture",
            "C": "Show genetic cultural programming that overrides school influence",
            "D": "Experience cultural confusion with no systematic patterns"
        },
        correct_answer_key: "B",
        value: 22,
        stance: "nurture",
        correct_feedback: "Culturally sophisticated! Children can maintain family cultural identity while adapting to school culture. Your cultural development involved managing multiple environmental influences simultaneously!",
        incorrect_feedback: "Research shows that children can maintain cultural family identity while adapting to school environments, demonstrating environmental flexibility without cultural loss.",
        engine_commentary: "The Engine appreciates cultural multiplicity: children learning to navigate multiple environmental contexts while maintaining core cultural identity from family environment."
    },

    {
        type: "mc_question",
        question: "Children who have imaginary friends during elementary school typically show:",
        options: {
            "A": "Genetic predispositions for creativity that will persist into adulthood",
            "B": "Environmental responses to social isolation or stress",
            "C": "Enhanced creativity and social understanding skills",
            "D": "Signs of developmental problems requiring intervention"
        },
        correct_answer_key: "C",
        value: 19,
        stance: "nurture",
        correct_feedback: "Imaginatively developmental! Imaginary friends often indicate enhanced creativity and social cognition development. Your imaginary companions were environmental tools for developing social and creative skills!",
        incorrect_feedback: "Research shows that imaginary friends often correlate with enhanced creativity and social understanding rather than indicating problems or purely genetic traits.",
        engine_commentary: "The Engine recognizes imaginative development: fantasy play serving as environmental tool for developing social cognition and creative thinking capacities through practice and exploration."
    },

    // Factoids (keep 4, remove 1 from original 5)
    {
        type: "factoid",
        text: "Children who learn to read early often maintain academic advantages throughout their school years, but late readers who receive good instruction typically catch up by middle school, showing both genetic and environmental influences on learning.",
        value: 15,
        stance: "neutral",
        engine_commentary: "The Engine appreciates reading complexity: early genetic advantages being modifiable through environmental intervention, demonstrating both nature's head start and nurture's catch-up potential."
    },

    {
        type: "factoid",
        text: "Elementary school children who participate in community service projects show enhanced empathy and social awareness that persists for years, suggesting that environmental moral education can shape character development.",
        value: 16,
        stance: "nurture",
        engine_commentary: "The Engine recognizes moral development: environmental service experiences creating lasting enhancement of empathy and social consciousness through experiential moral education."
    },

    {
        type: "factoid",
        text: "Children who grow up in households with many books show enhanced vocabulary and reading comprehension, even when controlling for parental education and income, demonstrating direct environmental influence on cognitive development.",
        value: 18,
        stance: "nurture",
        engine_commentary: "The Engine notes literary environment: physical presence of books creating cognitive enhancement through environmental enrichment that operates beyond formal educational factors."
    }
];
