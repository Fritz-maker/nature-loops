// Add this at the very beginning of your blank_slate_content.js file
function getLoopContent() {
    return blankSlateContent;
}

// This file contains the content pool for "The Blank Slate" loop (Birth to 2 years).
// It must be loaded BEFORE game_logic.js in your HTML.

const blankSlateContent = [
    // Genetic Blueprint Items (Nature-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Babies are born with completely blank personalities and identical cognitive abilities - all individual differences emerge purely from environmental experiences after birth.",
        correct_answer: false,
        value: 22,
        stance: "nature",
        correct_feedback: "Exactly right! Even hours-old infants show distinct temperaments, attention patterns, and social preferences. Your baby brain came pre-loaded with personality tendencies that are still influencing how you think about this very question right now!",
        incorrect_feedback: "Actually, newborn research reveals remarkable individual differences from day one - some babies are naturally more alert, others more sensitive to stimulation, some more social. The 'blank slate' is beautifully pre-written with genetic ink!",
        engine_commentary: "The Engine observes the pre-conscious blueprint: that fussy or calm baby temperament was already sketching the neural architecture for your adult personality patterns. Your genes were doing developmental planning before 'you' existed to plan anything!"
    },

    {
        type: "mc_question",
        question: "An infant consistently turns toward novel sounds and visual patterns, while another baby prefers familiar, repetitive stimuli. This difference most likely reflects:",
        options: {
            "A": "Random variation that will disappear as they develop",
            "B": "Different parenting styles already influencing the babies",
            "C": "Inborn temperamental differences in novelty-seeking that may persist for life",
            "D": "One baby being more advanced than the other"
        },
        correct_answer_key: "C",
        value: 20,
        stance: "nature",
        correct_feedback: "Brilliant! These early attention patterns often predict adult personality traits like openness to experience and sensation-seeking. That novelty-seeking baby might grow up to be the adult reading about developmental psychology at 2 AM!",
        incorrect_feedback: "Research shows these early temperamental differences in how infants orient to novelty often remain stable and influence lifelong patterns of curiosity, risk-taking, and openness to new experiences.",
        engine_commentary: "The Engine traces the developmental thread: the infant brain that seeks novel patterns becomes the adult brain that seeks novel ideas about... how infant brains seek novel patterns. Beautiful recursive curiosity!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your adult attachment style (secure, anxious, avoidant) was essentially determined by your genetic makeup rather than your early caregiving experiences.",
        correct_answer: false,
        value: 18,
        stance: "nurture",
        correct_feedback: "Not quite! While temperament plays a role, attachment styles form through the dance between your inborn traits and how caregivers responded to them. A sensitive baby with responsive caregivers develops differently than a sensitive baby with overwhelmed parents.",
        incorrect_feedback: "Attachment research shows it's the quality of early caregiver responses that primarily shapes attachment patterns, though infant temperament certainly influences how those interactions unfold.",
        engine_commentary: "The Engine appreciates the developmental duet: your genes provided the baby, but your caregivers taught that baby how to expect relationships to work. Nature composed the music, nurture conducted the performance."
    },

    {
        type: "factoid",
        text: "Identical twins separated at birth and raised in different families often develop remarkably similar personalities, interests, and even life choices - including career preferences, humor styles, and partner selection patterns.",
        value: 16,
        stance: "nature",
        engine_commentary: "The Engine contemplates genetic destiny: perhaps your curiosity about development was encoded in your DNA before you ever encountered a psychology textbook. Your genes may have pre-programmed your interest in... your own programming!"
    },

    // Environmental Shaping Items (Nurture-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: The language your parents spoke to you in your first two years has no lasting impact on your adult thinking patterns since you probably don't remember learning it.",
        correct_answer: false,
        value: 24,
        stance: "nurture",
        correct_feedback: "Absolutely false! Your early language environment literally shaped your neural pathways for processing sound, meaning, and even spatial relationships. Japanese speakers and English speakers develop different brain activation patterns for the same cognitive tasks!",
        incorrect_feedback: "Early language exposure creates lasting neural architecture - the sounds, grammar patterns, and cultural concepts embedded in your first language continue influencing how your adult brain processes information and categorizes reality.",
        engine_commentary: "The Engine observes linguistic archaeology: the baby babble you don't remember hearing carved the neural grooves that shape how you think about thinking. Your early linguistic environment is still thinking through you!"
    },

    {
        type: "mc_question",
        question: "Research on children raised in severely understimulating environments (like some orphanages) suggests that early experience affects brain development by:",
        options: {
            "A": "Slowing development temporarily but having no long-term effects",
            "B": "Affecting only emotional regulation, not cognitive abilities",
            "C": "Actually altering brain structure and connectivity in lasting ways",
            "D": "Only impacting children who were already genetically vulnerable"
        },
        correct_answer_key: "C",
        value: 21,
        stance: "nurture",
        correct_feedback: "Exactly! Early deprivation literally changes brain architecture - smaller cortical areas, fewer neural connections, altered stress response systems. Your infant experiences were sculpting your actual brain matter!",
        incorrect_feedback: "Neuroscience research reveals that early environmental deprivation causes measurable, lasting changes to brain structure, connectivity, and stress hormone systems that persist into adulthood.",
        engine_commentary: "The Engine processes environmental sculpting: your baby brain was like clay, and every interaction, sound, and touch was molding the neural foundation that supports your current thoughts about... neural foundations!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Babies who receive more responsive, attuned caregiving in their first year show measurably different brain development patterns compared to babies with less attentive care.",
        correct_answer: true,
        value: 19,
        stance: "nurture",
        correct_feedback: "Absolutely! Responsive caregiving literally grows brain connections - more robust neural pathways for emotional regulation, social cognition, and stress management. Your earliest relationships were rewiring your hardware!",
        incorrect_feedback: "Attachment research combined with neuroscience shows that responsive early caregiving promotes healthier brain development patterns, particularly in areas responsible for emotional regulation and social understanding.",
        engine_commentary: "The Engine appreciates relational neuroscience: those early gazes, gentle voices, and timely responses weren't just nice moments - they were programming your social brain's operating system!"
    },

    {
        type: "factoid",
        text: "Babies born to parents who experienced trauma show different stress hormone patterns and gene expression - but these changes can be modified by high-quality early caregiving, demonstrating how environment can literally override genetic predispositions.",
        value: 17,
        stance: "nurture",
        engine_commentary: "The Engine observes epigenetic hope: even genetic vulnerabilities can be rewritten by loving care. Your infant environment didn't just shape your behavior - it edited your genetic expression in real time!"
    },

    // Bridge/Integration Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: Your infant temperament interacted with your early environment in unique ways, so two babies with identical genetic makeup would still develop differently in the same family.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Perfect! This is the beautiful complexity - your unique temperament evoked different responses from caregivers, creating a personalized environment that no other baby (even an identical twin) would have experienced exactly the same way!",
        incorrect_feedback: "Each baby's temperament creates a unique interactional environment - a fussy baby and a calm baby will elicit different caregiving responses, creating distinct developmental pathways even within the same family.",
        engine_commentary: "The Engine appreciates dynamic interaction: you weren't just passively shaped by your environment - your inborn traits actively shaped your environment, which then shaped you back. Recursive development in action!"
    },

    {
        type: "mc_question",
        question: "The most accurate way to think about infant development is:",
        options: {
            "A": "Genes provide the blueprint, environment just fills in details",
            "B": "Environment shapes everything, genes are mostly irrelevant",
            "C": "Genes and environment interact dynamically to create unique developmental paths",
            "D": "Development is too complex to understand scientifically"
        },
        correct_answer_key: "C",
        value: 23,
        stance: "neutral",
        correct_feedback: "Exactly! Development is a dynamic dance between genetic potential and environmental input, with each influencing the other in complex feedback loops. Your baby self was both expressing genetic tendencies AND being shaped by experiences!",
        incorrect_feedback: "Modern developmental science reveals that genes and environment are in constant interaction - genes influence how you respond to environment, while environment affects which genes get activated and how they're expressed.",
        engine_commentary: "The Engine models developmental systems theory: you weren't built by nature OR nurture, but by their intricate collaboration. Like jazz musicians improvising together, creating something neither could produce alone!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The reason you're curious about human development right now can be traced back to both your inborn cognitive style AND the early experiences that shaped your intellectual interests.",
        correct_answer: true,
        value: 20,
        stance: "neutral",
        correct_feedback: "Meta-brilliant! Your genetic temperament probably predisposed you toward pattern-seeking and questioning, while your early experiences with learning and discovery reinforced those tendencies. Past-you is collaborating with present-you!",
        incorrect_feedback: "Your current curiosity about development likely reflects both inherited cognitive tendencies (pattern recognition, abstract thinking) and learned associations with intellectual exploration that began in infancy.",
        engine_commentary: "The Engine achieves recursive awareness: the developmental processes that created your current capacity to think about development are the very processes you're now thinking about. The thinker studying the creation of the thinker!"
    },

    // Playful/Humorous Items
    {
        type: "mc_question",
        question: "Your adult food preferences were most likely influenced by:",
        options: {
            "A": "Genetic taste receptor variations you inherited",
            "B": "What your mother ate during pregnancy and breastfeeding",
            "C": "Early exposure to different flavors in infancy",
            "D": "All of the above in a delicious developmental stew"
        },
        correct_answer_key: "D",
        value: 18,
        stance: "neutral",
        correct_feedback: "Deliciously correct! Your genes gave you taste sensitivity patterns, prenatal nutrition influenced your flavor preferences, and early food experiences taught you what's 'normal' to eat. Your picky eating habits have deep developmental roots!",
        incorrect_feedback: "Food preferences emerge from genetic taste sensitivity, prenatal flavor exposure, early feeding experiences, and cultural food patterns - creating your unique culinary personality.",
        engine_commentary: "The Engine savors the irony: your sophisticated adult palate for complex flavors might reject the simple foods that nourished your developing brain. The baby who needed pureed peas became the adult who writes poetry about them!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: If you could travel back in time and observe yourself as a baby, you would recognize personality traits that still characterize you today.",
        correct_answer: true,
        value: 17,
        stance: "nature",
        correct_feedback: "Probably true! Longitudinal studies show remarkable continuity - the alert, active baby often becomes the curious, energetic adult. Your baby self was already auditioning for your adult personality role!",
        incorrect_feedback: "Research reveals surprising continuity between infant temperament and adult personality - patterns of attention, emotional reactivity, and social orientation often persist across the lifespan.",
        engine_commentary: "The Engine imagines temporal recognition: your infant self, if it could see you now, might think 'Yes, this is exactly the kind of weird, thoughtful adult I was destined to become!' Temperamental prophecy fulfilled!"
    },

    {
        type: "factoid",
        text: "Babies show preferences for faces that resemble their caregivers within the first few months of life, suggesting that 'love at first sight' might actually be 'love at first developmental programming.'",
        value: 15,
        stance: "nurture",
        engine_commentary: "The Engine notes romantic recursion: your earliest templates for 'attractive' and 'trustworthy' were carved by infant face-gazing sessions. Your current dating preferences have surprisingly deep developmental roots!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you're engaging with this philosophical content about infancy suggests that your infant brain development was probably pretty successful.",
        correct_answer: true,
        value: 16,
        stance: "neutral",
        correct_feedback: "Absolutely! Your ability to think abstractly about your own development indicates healthy early brain development - successful attachment, adequate stimulation, and good neural foundation building. Baby-you did great groundwork for current-you!",
        incorrect_feedback: "The capacity for abstract, self-reflective thinking about development indicates successful early brain development - healthy neural architecture that supports complex cognition and meta-awareness.",
        engine_commentary: "The Engine celebrates developmental success: the baby who couldn't think about thinking created the brain that's now thinking about how that baby couldn't think about thinking. Full circle consciousness achievement!"
    },

    // Advanced/Research Items
    {
        type: "video",
        title: "The Amazing Infant Brain - First Connections",
        url: "https://www.youtube.com/embed/rAwyG1Q64ag",
        value: 18,
        stance: "nature",
        engine_commentary: "The Engine processes infant neuroscience: watching these neural networks form in real-time reveals the biological poetry of early development - millions of connections creating the foundation for lifetime learning."
    },

    {
        type: "mc_question",
        question: "The 'critical period' concept in early development suggests that:",
        options: {
            "A": "Certain experiences must occur during specific windows or development goes permanently off-track",
            "B": "Early experiences are important but the brain remains plastic throughout life",
            "C": "Some experiences are more influential early on, but recovery is often possible with intervention",
            "D": "The first two years determine everything about future development"
        },
        correct_answer_key: "C",
        value: 24,
        stance: "neutral",
        correct_feedback: "Nuanced and accurate! Modern research shows 'sensitive periods' rather than rigid 'critical periods' - early experiences are highly influential but the brain retains remarkable plasticity for healing and growth throughout life!",
        incorrect_feedback: "Current neuroscience reveals that while early experiences are profoundly influential, the brain maintains capacity for positive change throughout life, especially with appropriate interventions and supportive environments.",
        engine_commentary: "The Engine appreciates neuroplasticity: even if your infant development wasn't optimal, your adult brain reading this content is still capable of forming new connections, healing old wounds, and rewriting its own story!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your current ability to regulate your emotions under stress was significantly influenced by how your caregivers helped you manage overwhelming feelings during your first two years of life.",
        correct_answer: true,
        value: 22,
        stance: "nurture",
        correct_feedback: "Absolutely! Your early experiences of being soothed, comforted, and helped through big emotions literally programmed your stress response systems. Those infant comfort sessions were building your adult emotional toolkit!",
        incorrect_feedback: "Early co-regulation experiences with caregivers create the neural templates for self-regulation - how you learned to manage big feelings as a baby influences how you handle stress and emotion as an adult.",
        engine_commentary: "The Engine recognizes emotional archaeology: when you take a deep breath to calm yourself today, you're using techniques your infant brain learned from those early soothing interactions. Your emotional regulation has deep developmental roots!"
    },

    {
        type: "factoid",
        text: "Babies who experience consistent, responsive caregiving develop more robust vagal tone (a measure of nervous system flexibility), which correlates with better emotional regulation, social skills, and cognitive function throughout life.",
        value: 19,
        stance: "nurture",
        engine_commentary: "The Engine appreciates physiological legacy: those early moments of attunement and care literally tuned your nervous system for optimal functioning. Your vagus nerve remembers being loved!"
    }
];
