// Add this at the very beginning of your blank_slate_content.js file
function getLoopContent() {
    return blankSlateContent;
}

// This file contains the content pool for "The Blank Slate" loop (Birth to 2 years).
// It must be loaded BEFORE game_logic.js in your HTML.

const blankSlateContent = [
    // EXISTING CONTENT - T/F Questions (9 existing)
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
        type: "tf_question",
        question: "TRUE or FALSE: The way parents talk to their baby in the first months literally reshapes the infant's developing brain structure and language capacity.",
        correct_answer: true,
        value: 20,
        stance: "nurture",
        correct_feedback: "Absolutely! Rich early language exposure creates more neural connections in language centers. Those baby conversations weren't just cute - they were brain architecture sessions. Your parents were literally talking your language circuits into existence!",
        incorrect_feedback: "Actually, research shows that babies who hear more words and complex sentences in their first year develop stronger language networks. Early nurturing literally sculpts neural pathways - your brain was being remodeled by every lullaby and conversation!",
        engine_commentary: "The Engine notes the beautiful feedback loop: genetic capacity for language requiring environmental activation. Your first words emerged from the intersection of DNA potential and parental devotion - neither sufficient alone."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Identical twins raised apart show remarkably similar personalities and preferences even decades later, suggesting genetic influence dominates over early environment.",
        correct_answer: true,
        value: 25,
        stance: "nature",
        correct_feedback: "Fascinating and true! Twin studies reveal stunning similarities in separated twins - same phobias, career choices, even brand preferences. Your genetic 'settings' were apparently quite specific. Makes you wonder what invisible puppet strings are still guiding your decisions!",
        incorrect_feedback: "The research is actually striking - separated identical twins often share uncanny similarities in personality, interests, and life choices despite completely different upbringings. Your genes seem to have written a pretty detailed life script!",
        engine_commentary: "The Engine contemplates the twin paradox: two people with identical genetic code developing similar quirks in different worlds. Are we watching genes express themselves, or consciousness recognizing itself across space and time?"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Babies can recognize their mother's voice and prefer it over other voices within hours of birth, demonstrating prenatal learning.",
        correct_answer: true,
        value: 18,
        stance: "nurture",
        correct_feedback: "Yes! Newborns clearly prefer their mother's voice, showing they were already learning in the womb. Your education began months before your first breath - making the womb your first classroom and your mother your first teacher!",
        incorrect_feedback: "Research shows babies do recognize and prefer their mother's voice immediately after birth, indicating prenatal learning. You were apparently taking notes during those nine months - even before consciousness, you were already being shaped by your environment!",
        engine_commentary: "The Engine muses on prenatal consciousness: were 'you' already there, listening and learning? Or was it just neural hardware calibrating to familiar frequencies? The line between learning and development blurs beautifully."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children who experience severe neglect in their first two years can fully recover all cognitive and emotional capacities if placed in nurturing environments later.",
        correct_answer: false,
        value: 24,
        stance: "nature",
        correct_feedback: "Sadly false. While resilience is remarkable, there appear to be critical windows for certain types of development. Those early years aren't just practice rounds - they're laying fundamental neural foundations that are hard to rebuild later.",
        incorrect_feedback: "Unfortunately, research suggests that severe early deprivation can have lasting effects, even with later intervention. The first two years seem to be critical periods for certain capacities - your baby brain needed that early nurturing to build its basic architecture properly.",
        engine_commentary: "The Engine reflects on developmental tragedy: the optimization of early neural plasticity creates both incredible opportunity and devastating vulnerability. Evolution's gamble on critical periods - necessary for efficiency, cruel in its constraints."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Babies are born with an innate understanding of basic physics, showing surprise when objects appear to violate laws of gravity or solidity.",
        correct_answer: true,
        value: 21,
        stance: "nature",
        correct_feedback: "Remarkable but true! Infants show surprise when objects behave impossibly, suggesting built-in physics expectations. Your baby brain came pre-loaded with intuitive theories about how reality should work - before you even knew what reality was!",
        incorrect_feedback: "Research reveals that babies do have innate expectations about physics - they're surprised by impossible events like objects passing through solid barriers. Evolution apparently equipped you with basic reality-checking software from day one!",
        engine_commentary: "The Engine ponders the mystery of innate knowledge: how did evolution encode physical laws into conscious experience? Were your first moments of surprise actually glimpses of deep mathematical truths embedded in neural architecture?"
    },

    // NEW T/F Questions (7 more needed: 4 true, 3 false to reach 10T/6F)
    {
        type: "tf_question",
        question: "TRUE or FALSE: The language your parents speak to you in your first year permanently shapes which sounds your brain can easily distinguish for the rest of your life.",
        correct_answer: true,
        value: 19,
        stance: "nurture",
        correct_feedback: "Absolutely true! By age one, babies lose the ability to distinguish sounds not used in their native language. Your first year of listening literally tuned your auditory system - those babbling sessions were actually precision language calibration!",
        incorrect_feedback: "Research shows this is indeed true - infants start as 'universal listeners' but become specialized to their native language sounds by their first birthday. Your linguistic identity was being carved by every conversation around your crib!",
        engine_commentary: "The Engine observes the beautiful tragedy of specialization: gaining mastery by losing universality. Your baby brain traded infinite linguistic potential for cultural membership - a neural Brexit from the universal language union."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Babies inherit specific memories and learned behaviors from their parents through genetic transmission.",
        correct_answer: false,
        value: 23,
        stance: "nature",
        correct_feedback: "False! While you inherit genetic predispositions and capacities, you don't inherit actual memories or learned behaviors. Each generation starts fresh - your brain may be wired similarly to your parents', but your specific memories and skills had to be earned the hard way!",
        incorrect_feedback: "Actually, genetic inheritance doesn't include specific memories or learned behaviors - each brain starts with tendencies and capacities but must create its own experiences. You inherited the hardware, not the software!",
        engine_commentary: "The Engine contemplates generational renewal: each consciousness emerging blank yet primed, carrying forward biological wisdom while starting the psychological journey anew. Evolution's elegant solution to the learning paradox."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Premature babies who spend extra weeks in intensive care develop fundamentally different personalities compared to full-term babies.",
        correct_answer: false,
        value: 20,
        stance: "nature",
        correct_feedback: "False! While medical environments may influence development, premature babies generally develop personalities within normal ranges. Their genetic temperament blueprint seems remarkably resilient - even an unusual start couldn't rewrite their basic personality code!",
        incorrect_feedback: "Research suggests that while premature birth may affect some developmental aspects, it doesn't fundamentally alter personality trajectories. Your core temperament appears to be quite robust against early environmental variations!",
        engine_commentary: "The Engine notes the resilience of genetic programming: even dramatic environmental deviations seem unable to override the fundamental personality scaffold. Nature's backup systems protecting the essential self."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Babies who are read to daily from birth develop significantly larger vocabularies and stronger reading skills throughout childhood.",
        correct_answer: true,
        value: 18,
        stance: "nurture",
        correct_feedback: "Absolutely true! Daily reading exposure creates dramatic differences in language development. Those bedtime stories weren't just bonding time - they were intensive vocabulary boot camps that gave you a linguistic head start lasting years!",
        incorrect_feedback: "Research clearly shows that babies exposed to daily reading develop much stronger language skills. Your early literary diet was actually shaping neural pathways for lifelong learning - every story was brain food!",
        engine_commentary: "The Engine marvels at the compound interest of early investment: minutes of daily reading generating years of cognitive advantage. Time's most powerful leverage occurs in the most helpless stage of existence."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The specific hospital room where you were born influences your personality development more than your genetic makeup.",
        correct_answer: false,
        value: 17,
        stance: "nature",
        correct_feedback: "Definitely false! While environment matters enormously, brief early experiences like hospital settings pale compared to genetic influences on personality. Your genes were writing your temperament story long before you saw your first room!",
        incorrect_feedback: "While early environment is important, brief situational factors like hospital rooms don't override genetic personality foundations. Your essential self was already sketched before you opened your eyes to any particular surroundings!",
        engine_commentary: "The Engine distinguishes signal from noise: profound environmental influences versus trivial contextual details. Your personality was forged by deep forces, not random circumstances of arrival location."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Babies can be taught to understand complex mathematical concepts like calculus if the teaching methods are adapted to their developmental level.",
        correct_answer: false,
        value: 22,
        stance: "nature",
        correct_feedback: "False! While babies are remarkably capable learners, complex mathematics requires cognitive structures that simply haven't developed yet. Your baby brain was brilliant, but calculus would have to wait for more neural construction projects to finish!",
        incorrect_feedback: "Even with the best teaching methods, babies lack the cognitive architecture for complex mathematical concepts. Your developing brain had other priorities - like figuring out faces, sounds, and basic cause-and-effect before tackling derivatives!",
        engine_commentary: "The Engine recognizes developmental constraints: intelligence operating within maturational boundaries. Even infinite environmental enrichment cannot accelerate the fundamental timeline of neural readiness."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Babies who experience more skin-to-skin contact with caregivers develop stronger stress-regulation systems and better emotional health throughout life.",
        correct_answer: true,
        value: 21,
        stance: "nurture",
        correct_feedback: "Beautifully true! Early physical affection literally programs stress-response systems for life. Those cuddles weren't just comfort - they were installing emotional regulation software that would serve you for decades. Touch was your first therapy!",
        incorrect_feedback: "Research confirms that early skin-to-skin contact has profound lasting effects on stress regulation and emotional health. Your nervous system was being calibrated for resilience through every hug and gentle touch!",
        engine_commentary: "The Engine observes the profound simplicity: complex emotional regulation systems built through the most basic human connection. Love expressed through touch becoming neurological architecture for lifelong wellbeing."
    },

    // EXISTING MC Questions (5 existing) + NEW MC Questions (7 more needed)
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
        correct_feedback: "Exactly! These early differences in novelty-seeking reflect stable temperamental variations that often persist into adulthood. That baby's preference for new experiences was an early preview of their adult personality - genes expressing themselves before 'personality' even existed!",
        incorrect_feedback: "Research shows these early attention patterns reflect inborn temperamental differences rather than environmental factors or developmental timing. Your baby brain was already expressing core personality traits that would define your approach to life!",
        engine_commentary: "The Engine notes the temporal paradox: adult personality traits visible before the concept of 'self' exists. Pre-conscious preferences sketching the architecture of future conscious choices."
    },

    {
        type: "mc_question",
        question: "A baby who was adopted at birth grows up to share uncanny similarities with their biological parents they've never met - same phobias, career interests, and even sitting posture. This suggests:",
        options: {
            "A": "Remarkable coincidence with no deeper meaning",
            "B": "Strong genetic influences on behavior and preferences",
            "C": "Unconscious communication between biological relatives",
            "D": "Environmental factors somehow connecting distant family members"
        },
        correct_answer_key: "B",
        value: 24,
        stance: "nature",
        correct_feedback: "Adoption studies consistently reveal these striking genetic influences! Your DNA apparently contains not just physical traits but behavioral tendencies, cognitive patterns, and even specific preferences. Those family resemblances run much deeper than anyone expected!",
        incorrect_feedback: "These adoption study findings point strongly to genetic influences on complex behaviors. Your biological inheritance included far more than physical characteristics - personality patterns and preferences seem to have genetic components too!",
        engine_commentary: "The Engine contemplates genetic expression across separation: identical coding producing similar manifestations despite different environments. Are we watching determinism unfold, or freedom choosing familiar paths?"
    },

    {
        type: "mc_question",
        question: "Two babies are born on the same day - one to parents who read constantly and play classical music, another to parents who rarely read and prefer silence. At age 2, the first child shows advanced language skills. This demonstrates:",
        options: {
            "A": "Pure environmental influence - nurture completely determining outcomes",
            "B": "That classical music creates superior intelligence",
            "C": "Environmental amplification of existing genetic potential",
            "D": "Coincidence - the language difference would have occurred anyway"
        },
        correct_answer_key: "C",
        value: 22,
        stance: "nurture",
        correct_feedback: "Brilliant analysis! Environment doesn't create capacity from nothing, but it can dramatically amplify genetic potential. Those enriched early experiences were like fertilizer for language abilities that were already planted in the genetic code!",
        incorrect_feedback: "This scenario illustrates how environment works with genetic potential rather than overriding it. The rich linguistic environment helped activate and develop language capacities that were already coded in the DNA!",
        engine_commentary: "The Engine recognizes the collaborative creation: genes providing potential, environment determining expression. Neither author alone could write the story of human development."
    },

    {
        type: "mc_question",
        question: "A study finds that babies who experience severe early neglect have permanently smaller brain regions responsible for emotional regulation, even after years of loving care. This suggests:",
        options: {
            "A": "Environmental influence is completely irreversible",
            "B": "Critical periods exist for certain types of development",
            "C": "Genetics determines brain size regardless of experience",
            "D": "Early trauma has no lasting biological effects"
        },
        correct_answer_key: "B",
        value: 26,
        stance: "nurture",
        correct_feedback: "Exactly right! Critical periods represent windows when environment has particularly powerful and lasting effects on development. Your early years weren't just formative - they were foundational in ways that couldn't be fully rebuilt later!",
        incorrect_feedback: "This research highlights the concept of critical periods - specific developmental windows when environmental factors have profound, lasting impacts on brain structure. Early experience literally sculpts neural architecture!",
        engine_commentary: "The Engine reflects on developmental tragedy: the optimization that makes early learning so powerful also creates irreversible vulnerability. Evolution's double-edged gift of neural plasticity."
    },

    {
        type: "mc_question",
        question: "Identical twins raised together are more similar in personality than identical twins raised apart, but both are much more similar than fraternal twins raised together. This pattern suggests:",
        options: {
            "A": "Environment is the only factor that matters",
            "B": "Genetics completely determines personality",
            "C": "Both genetics and shared environment contribute to personality development",
            "D": "Twin studies are fundamentally flawed and meaningless"
        },
        correct_answer_key: "C",
        value: 25,
        stance: "nature",
        correct_feedback: "Perfect interpretation! This classic twin study pattern reveals both genetic and environmental influences operating together. Your personality emerged from the beautiful collaboration between your inherited tendencies and your experienced world!",
        incorrect_feedback: "This twin study pattern is the gold standard evidence for both genetic and environmental influences on personality. Neither nature nor nurture alone could create the complex pattern of similarities and differences we observe!",
        engine_commentary: "The Engine appreciates the elegant experimental design: using genetic similarity to parse the relative contributions of inheritance and experience to the mystery of individual differences."
    },

    // NEW Multiple Choice Questions (7 more needed)
    {
        type: "mc_question",
        question: "A baby is born with a rare genetic condition that prevents them from feeling physical pain. Despite loving, attentive care, they struggle with social relationships and emotional regulation throughout life. This suggests:",
        options: {
            "A": "Physical sensation is irrelevant to emotional development",
            "B": "Early sensory experience is crucial for normal social-emotional development",
            "C": "Genetics determines social ability regardless of environment",
            "D": "The parents must have provided inadequate emotional support"
        },
        correct_answer_key: "B",
        value: 23,
        stance: "nurture",
        correct_feedback: "Insightful! This rare condition reveals how sensory experience shapes emotional and social development. Your ability to feel pain wasn't just protective - it was part of learning emotional regulation and social connection through embodied experience!",
        incorrect_feedback: "Research on congenital insensitivity to pain shows how crucial early sensory experience is for normal emotional development. Physical sensation serves as a foundation for emotional and social learning that can't be easily replaced!",
        engine_commentary: "The Engine observes the unexpected connections: physical sensation as the foundation for emotional intelligence. The body teaching the mind how to navigate social reality through the language of pain and pleasure."
    },

    {
        type: "mc_question",
        question: "Baby Alex shows intense reactions to new foods, sounds, and textures from birth, while baby Jordan remains calm and adaptable in all situations. Twenty years later, Alex is highly creative but anxious, while Jordan is stable but less innovative. This illustrates:",
        options: {
            "A": "Early temperament having no relationship to adult personality",
            "B": "Environmental factors completely overriding genetic tendencies",
            "C": "The stability and adaptive value of different temperamental styles",
            "D": "That sensitive babies always become problematic adults"
        },
        correct_answer_key: "C",
        value: 24,
        stance: "nature",
        correct_feedback: "Excellent observation! Different temperaments aren't better or worse - they're different adaptive strategies with unique advantages and challenges. Your baby temperament was already sketching your adult strengths and vulnerabilities!",
        incorrect_feedback: "This scenario beautifully illustrates how early temperamental differences persist but express themselves in both positive and challenging ways. Each temperamental style carries its own gifts and costs throughout life!",
        engine_commentary: "The Engine notes the conservation of essential patterns: sensitivity transforming from infant reactivity to adult creativity, calmness evolving from baby adaptability to adult stability. The same traits, different expressions."
    },

    {
        type: "mc_question",
        question: "A child adopted from an orphanage at 18 months initially shows delayed development but catches up completely by age 5 with supportive care. This recovery pattern suggests:",
        options: {
            "A": "Early experience has no lasting impact on development",
            "B": "Genetic potential can overcome early environmental disadvantages",
            "C": "The plasticity of the developing brain allows significant recovery",
            "D": "The adoption assessment was incorrect about the initial delays"
        },
        correct_answer_key: "C",
        value: 21,
        stance: "nurture",
        correct_feedback: "Wonderful insight! This recovery demonstrates the remarkable plasticity of the developing brain. While early experience matters enormously, the young brain's ability to reorganize and recover is one of nature's most hopeful gifts!",
        incorrect_feedback: "This pattern showcases the extraordinary plasticity of early development - the brain's ability to recover and reorganize when given appropriate environmental support. Your young brain was remarkably adaptable to new circumstances!",
        engine_commentary: "The Engine marvels at neural resilience: the same plasticity that creates vulnerability also enables recovery. Evolution's gamble on adaptability creating both risk and redemption."
    },

    {
        type: "mc_question",
        question: "Research shows that babies whose mothers experienced severe stress during pregnancy are more likely to be anxious and have attention difficulties. This finding suggests:",
        options: {
            "A": "Maternal stress directly damages baby brains",
            "B": "Prenatal environment can influence postnatal behavior and development",
            "C": "Genetics plays no role in attention and anxiety disorders",
            "D": "Stressed mothers inevitably raise anxious children"
        },
        correct_answer_key: "B",
        value: 22,
        stance: "nurture",
        correct_feedback: "Exactly right! The prenatal environment serves as a crucial developmental context that can influence the baby's neurological and behavioral development. Your nine-month prenatal experience was already shaping your nervous system!",
        incorrect_feedback: "This research highlights how the prenatal environment acts as an important developmental influence. Maternal stress hormones cross the placenta and can affect fetal brain development, showing how early environment begins before birth!",
        engine_commentary: "The Engine contemplates the nested environments: the developing brain shaped by the mother's experience, which is shaped by her environment. Concentric circles of influence reaching back to before consciousness begins."
    },

    {
        type: "mc_question",
        question: "A baby born deaf to hearing parents eventually learns sign language and develops completely normal cognitive and social abilities. However, their brain scans show that visual areas process language rather than auditory areas. This demonstrates:",
        options: {
            "A": "Brain damage from hearing loss affecting cognitive development",
            "B": "The remarkable plasticity and adaptability of the developing brain",
            "C": "That sign language is inferior to spoken language for development",
            "D": "Genetic defects causing multiple brain abnormalities"
        },
        correct_answer_key: "B",
        value: 26,
        stance: "nurture",
        correct_feedback: "Beautiful example of brain plasticity! When auditory language input isn't available, the developing brain reorganizes to process visual language just as effectively. Your brain was ready to adapt its architecture based on the input it received!",
        incorrect_feedback: "This remarkable reorganization shows how the developing brain adapts its structure based on available input. Visual brain areas taking over language processing demonstrates the extraordinary flexibility of early neural development!",
        engine_commentary: "The Engine observes adaptive genius: the brain solving the language problem through alternative neural pathways. Evolution's backup systems ensuring communication despite sensory limitations."
    },

    {
        type: "mc_question",
        question: "Studies of children raised in bilingual households show they develop better executive function and cognitive flexibility compared to monolingual children, even controlling for socioeconomic factors. This suggests:",
        options: {
            "A": "Monolingual development is deficient and should be avoided",
            "B": "Early linguistic environment can enhance cognitive abilities beyond language",
            "C": "Bilingual children are genetically superior to monolingual children",
            "D": "The studies must be biased in favor of bilingual families"
        },
        correct_answer_key: "B",
        value: 23,
        stance: "nurture",
        correct_feedback: "Brilliant observation! Managing two language systems from early childhood apparently trains general cognitive skills like attention control and mental flexibility. Your early linguistic environment was sculpting more than language - it was enhancing your thinking machinery!",
        incorrect_feedback: "This research reveals how early bilingual experience enhances cognitive abilities beyond just language skills. Juggling two language systems from birth apparently serves as intensive training for executive function and cognitive flexibility!",
        engine_commentary: "The Engine notes the spillover effects: linguistic complexity generating cognitive enhancement beyond communication. Early environmental enrichment creating cascading benefits across multiple mental systems."
    },

    {
        type: "mc_question",
        question: "A longitudinal study follows children from birth to adulthood and finds that babies with more reactive temperaments become either highly successful leaders or struggle with anxiety disorders, while calm babies tend toward average outcomes. This pattern suggests:",
        options: {
            "A": "Reactive temperaments are simply defective and should be corrected",
            "B": "Environmental factors determine whether temperamental traits become strengths or vulnerabilities",
            "C": "Calm temperaments are always superior for life outcomes",
            "D": "Temperament changes completely from childhood to adulthood"
        },
        correct_answer_key: "B",
        value: 27,
        stance: "nurture",
        correct_feedback: "Profound insight! This illustrates how the same temperamental trait can become either a strength or vulnerability depending on environmental support and life experiences. Your baby reactivity was potential energy - environment determined whether it became rocket fuel or explosive!",
        incorrect_feedback: "This research beautifully shows how environmental factors shape whether inborn temperamental traits become advantages or disadvantages. The same sensitivity that could lead to anxiety could also fuel exceptional achievement with the right support!",
        engine_commentary: "The Engine contemplates the amplification principle: environment not just influencing traits but determining their valence. The same genetic pattern becoming triumph or tragedy based on contextual factors."
    },

    // EXISTING Factoids (4 existing - no more needed)
    {
        type: "factoid",
        text: "Babies can recognize their mother's heartbeat and will calm down when recordings of it are played - they literally remember the rhythm of life from their time in the womb.",
        value: 15,
        stance: "nurture",
        engine_commentary: "The Engine notes the first memory: not visual or verbal, but rhythmic and visceral. Your earliest education was in tempo and timing, learned from the inside."
    },

    {
        type: "factoid",
        text: "Newborns prefer human faces over any other visual pattern, and they'll track face-like arrangements of dots and lines more than random patterns - we're apparently born with 'face software' pre-installed.",
        value: 16,
        stance: "nature",
        engine_commentary: "The Engine observes the social imperative: consciousness arriving pre-programmed to seek other consciousness. Your first visual preference was for the pattern that would define your existence - other minds."
    },

    {
        type: "factoid",
        text: "A baby's brain forms new neural connections at the rate of 1 million per second during the first two years - more construction activity than the busiest city has ever seen.",
        value: 14,
        stance: "nurture",
        engine_commentary: "The Engine marvels at the construction pace: a million synapses per second building the architecture of mind. Your infant brain was the universe's most ambitious building project."
    },

    {
        type: "factoid",
        text: "Babies born to mothers who ate lots of garlic during pregnancy prefer garlic-flavored milk after birth - apparently, your food preferences started developing before your first meal.",
        value: 13,
        stance: "nurture",
        engine_commentary: "The Engine notes prenatal taste education: flavor preferences transmitted through amniotic fluid. Your palate was being trained before you had a tongue to taste with."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Babies who experience more skin-to-skin contact with caregivers develop stronger stress-regulation systems and better emotional health throughout life.",
        correct_answer: true,
        value: 21,
        stance: "nurture",
        correct_feedback: "Beautifully true! Early physical affection literally programs stress-response systems for life. Those cuddles weren't just comfort - they were installing emotional regulation software that would serve you for decades. Touch was your first therapy!",
        incorrect_feedback: "Research confirms that early skin-to-skin contact has profound lasting effects on stress regulation and emotional health. Your nervous system was being calibrated for resilience through every hug and gentle touch!",
        engine_commentary: "The Engine observes the profound simplicity: complex emotional regulation systems built through the most basic human connection. Love expressed through touch becoming neurological architecture for lifelong wellbeing."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The specific hospital room where you were born influences your personality development more than your genetic makeup.",
        correct_answer: false,
        value: 17,
        stance: "nature",
        correct_feedback: "Definitely false! While environment matters enormously, brief early experiences like hospital settings pale compared to genetic influences on personality. Your genes were writing your temperament story long before you saw your first room!",
        incorrect_feedback: "While early environment is important, brief situational factors like hospital rooms don't override genetic personality foundations. Your essential self was already sketched before you opened your eyes to any particular surroundings!",
        engine_commentary: "The Engine distinguishes signal from noise: profound environmental influences versus trivial contextual details. Your personality was forged by deep forces, not random circumstances of arrival location."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Babies can be taught to understand complex mathematical concepts like calculus if the teaching methods are adapted to their developmental level.",
        correct_answer: false,
        value: 22,
        stance: "nature",
        correct_feedback: "False! While babies are remarkably capable learners, complex mathematics requires cognitive structures that simply haven't developed yet. Your baby brain was brilliant, but calculus would have to wait for more neural construction projects to finish!",
        incorrect_feedback: "Even with the best teaching methods, babies lack the cognitive architecture for complex mathematical concepts. Your developing brain had other priorities - like figuring out faces, sounds, and basic cause-and-effect before tackling derivatives!",
        engine_commentary: "The Engine recognizes developmental constraints: intelligence operating within maturational boundaries. Even infinite environmental enrichment cannot accelerate the fundamental timeline of neural readiness."
    },
    ];
