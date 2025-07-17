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
        question: "TRUE or FALSE: Children's core personality traits emerge regardless of their cultural environment - a naturally introverted child will be introverted whether raised in Japan or Brazil.",
        correct_answer: false,
        value: 22,
        stance: "nature",
        correct_feedback: "Actually, it's more complex! While temperament provides a foundation, cultural values about social behavior dramatically shape how traits get expressed. That 'introverted' child might become a thoughtful observer in one culture and learn bold social skills in another!",
        incorrect_feedback: "Cross-cultural research shows that the same temperamental tendencies can manifest very differently depending on cultural values, parenting styles, and social expectations - the mirror shapes what it reflects!",
        engine_commentary: "The Engine appreciates cultural plasticity: your childhood personality wasn't just your genes expressing themselves, but your genes learning to speak the local cultural language. Nature with a cultural accent!"
    },

    {
        type: "mc_question",
        question: "A 5-year-old who naturally seeks attention becomes the class clown in an American school but learns quiet respect in a traditional Korean classroom. This demonstrates:",
        options: {
            "A": "The child has different personalities in different settings",
            "B": "One culture is suppressing the child's true nature",
            "C": "The same temperament adapting to different cultural scripts",
            "D": "The child is confused about their identity"
        },
        correct_answer_key: "C",
        value: 20,
        stance: "neutral",
        correct_feedback: "Perfect! This shows how genetic temperament becomes cultural performance. The attention-seeking drive is the same, but each culture provides different acceptable ways to express it. Your personality learns to dance to cultural music!",
        incorrect_feedback: "This illustrates how temperamental tendencies get channeled through cultural frameworks - the same underlying traits can manifest in completely different behaviors depending on social context and expectations.",
        engine_commentary: "The Engine observes cultural translation: that attention-seeking child is learning that every culture has its own vocabulary for personality expression. Same inner impulse, different outer choreography!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children who show early mathematical or artistic talents will excel in those areas regardless of whether their family and culture value those abilities.",
        correct_answer: false,
        value: 18,
        stance: "nurture",
        correct_feedback: "Not necessarily! Talent needs cultural soil to grow. A mathematically gifted child in a culture that doesn't value formal education might become a brilliant practical problem-solver instead of a mathematician. Genes provide potential, culture determines which potentials get cultivated!",
        incorrect_feedback: "Research shows that innate abilities require cultural support, recognition, and development opportunities to flourish - many potential talents remain dormant without appropriate environmental nurturing.",
        engine_commentary: "The Engine notes talent ecology: your gifts weren't just waiting to unfold automatically - they needed the right cultural greenhouse conditions to bloom into recognizable skills."
    },

    {
        type: "factoid",
        text: "Children raised in collectivist cultures (emphasizing group harmony) show different patterns of moral reasoning than those in individualist cultures (emphasizing personal rights), even when controlling for socioeconomic factors.",
        value: 16,
        stance: "nurture",
        engine_commentary: "The Engine processes moral programming: your childhood culture didn't just teach you what to think - it literally shaped HOW you think about right and wrong. Your moral intuitions have cultural fingerprints!"
    },

    // Cultural Transmission Items (Nurture-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: The language you learned as a child has no effect on your adult thinking patterns since all languages can express the same basic concepts.",
        correct_answer: false,
        value: 24,
        stance: "nurture",
        correct_feedback: "Fascinatingly false! Different languages literally structure thought differently. Russian speakers are faster at distinguishing light blue from dark blue, Japanese speakers think about spatial relationships differently, and speakers of languages with many future tenses plan differently for the future!",
        incorrect_feedback: "Linguistic research reveals that language structure influences cognitive patterns - how your childhood language organized concepts, time, space, and relationships continues to influence your adult thinking processes.",
        engine_commentary: "The Engine appreciates linguistic archaeology: your childhood language didn't just give you words - it gave you mental architecture. You're still thinking in the cognitive blueprints your early language provided!"
    },

    {
        type: "mc_question",
        question: "Children who grow up in cultures with extended family structures versus nuclear family structures typically develop:",
        options: {
            "A": "The same social skills regardless of family type",
            "B": "Different patterns of emotional regulation and social cognition",
            "C": "Better or worse outcomes depending on which is 'natural'",
            "D": "Personality problems from non-traditional arrangements"
        },
        correct_answer_key: "B",
        value: 21,
        stance: "nurture",
        correct_feedback: "Exactly! Extended family cultures often produce children who are better at reading group dynamics and managing multiple relationships, while nuclear family cultures may foster more intensive parent-child bonding and individual decision-making skills. Different social architectures build different social brains!",
        incorrect_feedback: "Cross-cultural research shows that different family structures systematically shape children's social cognition, emotional regulation strategies, and relationship expectations in lasting ways.",
        engine_commentary: "The Engine models family systems: your childhood family structure wasn't just your living situation - it was your training ground for understanding how humans connect. Social blueprints inherited through household design!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children automatically absorb their culture's gender roles and expectations without consciously learning them.",
        correct_answer: true,
        value: 19,
        stance: "nurture",
        correct_feedback: "Absolutely! Children are incredible pattern detectors who unconsciously absorb gender scripts from thousands of subtle cues - toy choices, language patterns, who does what work, media representation. They're cultural anthropologists building internal models of 'how to be' their gender!",
        incorrect_feedback: "Developmental research shows that children unconsciously learn complex cultural patterns through observation, imitation, and subtle social feedback rather than explicit instruction.",
        engine_commentary: "The Engine observes unconscious apprenticeship: your child brain was constantly studying the cultural curriculum of gender, race, class, and identity - learning the unspoken rules that still influence your adult expectations!"
    },

    {
        type: "factoid",
        text: "Children who grow up bilingual show enhanced cognitive flexibility, better problem-solving skills, and different patterns of brain activation compared to monolingual children - the second language literally rewires neural networks.",
        value: 17,
        stance: "nurture",
        engine_commentary: "The Engine celebrates linguistic neuroplasticity: your childhood languages weren't just communication tools - they were brain modification technologies, each one adding new cognitive capabilities!"
    },

    // Bridge/Integration Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: Your current cultural identity reflects both your innate temperament AND the specific cultural environment that shaped how that temperament got expressed.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Brilliantly complex! You brought certain temperamental tendencies to your cultural environment, but that culture shaped which aspects got emphasized, which got suppressed, and how they all got woven together into your unique identity. Nature provided the threads, culture did the weaving!",
        incorrect_feedback: "Identity formation involves the dynamic interaction between innate temperamental tendencies and specific cultural contexts, creating unique patterns that neither genetics nor environment alone could produce.",
        engine_commentary: "The Engine appreciates identity co-creation: you weren't just passively molded by culture OR simply expressing your genes - you were actively collaborating with your cultural environment to become uniquely you!"
    },

    {
        type: "mc_question",
        question: "The most accurate way to understand childhood cultural learning is:",
        options: {
            "A": "Children are blank slates that culture writes upon",
            "B": "Children naturally resist cultural programming to express their true selves",
            "C": "Children actively participate in creating their cultural identity through selective learning",
            "D": "Culture completely determines who children become"
        },
        correct_answer_key: "C",
        value: 23,
        stance: "neutral",
        correct_feedback: "Perfect! Children aren't passive recipients of culture - they're active participants who selectively absorb, modify, and even resist cultural messages based on their temperament, interests, and emerging identity. They're cultural co-creators, not just cultural products!",
        incorrect_feedback: "Research reveals that children are active agents in their own cultural learning, selectively attending to, interpreting, and incorporating cultural information in ways that match their developing sense of self.",
        engine_commentary: "The Engine models active apprenticeship: your child self wasn't just downloading cultural software - you were customizing it, debugging it, and writing your own patches based on who you were becoming!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The reason you have certain cultural values and preferences today can be traced to both your childhood temperament AND the specific cultural messages you encountered during your formative years.",
        correct_answer: true,
        value: 20,
        stance: "neutral",
        correct_feedback: "Meta-insightful! Your current values emerged from the dance between your natural inclinations and your cultural environment. You probably gravitated toward cultural messages that resonated with your temperament while being shaped by the ones you encountered most frequently!",
        incorrect_feedback: "Adult cultural identity reflects both temperamental predispositions that influenced which cultural messages resonated and the specific cultural content that was available during critical developmental periods.",
        engine_commentary: "The Engine achieves cultural recursion: the cultural values that led you to explore these questions about cultural values were themselves shaped by the interaction between your childhood temperament and your cultural environment!"
    },

    // Playful/Humorous Items
    {
        type: "mc_question",
        question: "Your adult social awkwardness or confidence can probably be traced back to:",
        options: {
            "A": "Your genetic predisposition to social anxiety or boldness",
            "B": "Early social experiences that taught you how interactions typically go",
            "C": "Cultural scripts about appropriate social behavior you internalized",
            "D": "All of the above in a beautifully complex social stew"
        },
        correct_answer_key: "D",
        value: 18,
        stance: "neutral",
        correct_feedback: "Socially brilliant! Your adult social style reflects your inborn sensitivity to social cues, early experiences that taught you what to expect from interactions, AND cultural rules about how people 'should' behave socially. Your social anxiety has deep developmental roots!",
        incorrect_feedback: "Social development involves genetic temperament, early social experiences, and cultural learning all combining to create adult patterns of social confidence or anxiety.",
        engine_commentary: "The Engine observes social archaeology: that awkward moment you had yesterday can be traced back through layers of cultural learning, early social experiences, and temperamental sensitivity. Your social self has quite a developmental history!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The childhood games you loved reveal both your natural interests AND the values your culture wanted children to learn.",
        correct_answer: true,
        value: 17,
        stance: "neutral",
        correct_feedback: "Playfully profound! Your favorite childhood games probably matched your temperament (competitive kids loving competitive games) while simultaneously teaching cultural values (cooperation, competition, gender roles, problem-solving styles). Play is cultural education disguised as fun!",
        incorrect_feedback: "Childhood play reflects both individual temperamental preferences and cultural transmission of values, skills, and social expectations through seemingly 'natural' activities.",
        engine_commentary: "The Engine appreciates ludic learning: those hours spent playing weren't just entertainment - they were cultural bootcamp where you practiced being the kind of person your society valued while expressing your natural inclinations!"
    },

    {
        type: "factoid",
        text: "Children who move between cultures during their formative years often develop 'cultural code-switching' abilities - they can unconsciously adjust their personality expression depending on which cultural context they're in.",
        value: 15,
        stance: "neutral",
        engine_commentary: "The Engine notes cultural fluency: some childhood experiences create multilingual personalities - the same core self speaking different cultural languages depending on the social situation!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your current relationship with authority figures (teachers, bosses, police) was significantly shaped by how authority was presented and experienced in your childhood culture.",
        correct_answer: true,
        value: 16,
        stance: "nurture",
        correct_feedback: "Authority-wise observation! Whether you naturally respect, question, or fear authority largely depends on whether your childhood culture presented authority figures as benevolent protectors, earned leaders, or potential threats. Your inner rebel or conformist has cultural training!",
        incorrect_feedback: "Attitudes toward authority are largely shaped by early cultural experiences with how power is exercised, justified, and responded to within family and community contexts.",
        engine_commentary: "The Engine recognizes authority programming: your gut reaction to being told what to do reflects years of childhood cultural training about when authority is legitimate and how it should be exercised!"
    },

    // Advanced/Research Items
    {
        type: "video",
        title: "Cultural Learning in Childhood - How Kids Absorb Society",
        url: "https://www.youtube.com/embed/68aUiqj7m7k",
        value: 18,
        stance: "nurture",
        engine_commentary: "The Engine processes cultural transmission: watching children learn culture reveals how sophisticated and unconscious the process is - they're natural anthropologists studying the tribe they're joining!"
    },

    {
        type: "mc_question",
        question: "Research on 'third culture kids' (children who grow up outside their parents' culture) suggests that:",
        options: {
            "A": "They develop confused, unstable identities from cultural mixing",
            "B": "They naturally return to their genetic cultural programming",
            "C": "They often develop enhanced cultural adaptability and global perspectives",
            "D": "They can't form authentic cultural connections anywhere"
        },
        correct_answer_key: "C",
        value: 24,
        stance: "neutral",
        correct_feedback: "Globally insightful! Third culture kids often develop remarkable cultural intelligence - they learn that identity can be flexible, that cultural rules are contextual, and that you can belong to multiple worlds simultaneously. Cultural multilingualism at its finest!",
        incorrect_feedback: "Research on third culture kids reveals that exposure to multiple cultures during childhood often enhances rather than hinders identity development, creating culturally adaptive and globally minded individuals.",
        engine_commentary: "The Engine appreciates cultural flexibility: some childhoods create cultural shapeshifters who understand that identity isn't fixed but can be consciously adapted to different cultural contexts!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Children from the same family can have dramatically different cultural experiences based on birth order, gender, and the specific historical moment of their childhood.",
        correct_answer: true,
        value: 22,
        stance: "nurture",
        correct_feedback: "Family-wise insight! Each child experiences a unique family culture - the oldest gets the anxious first-time parents, the youngest gets the relaxed experienced ones, different genders get different messages, and each grows up in a different historical moment. Same family, different cultural worlds!",
        incorrect_feedback: "Even within the same family, each child experiences different cultural environments based on family development, parental experience, gender expectations, and broader historical context.",
        engine_commentary: "The Engine observes micro-cultural variation: your childhood family culture was unique to your exact position in space, time, and family constellation. Your siblings literally grew up in different cultural worlds!"
    },

    {
        type: "factoid",
        text: "Children who grow up in cultures that emphasize interdependence show different patterns of brain activation when thinking about themselves compared to children from independence-focused cultures - cultural values literally reshape neural self-representation.",
        value: 19,
        stance: "nurture",
        engine_commentary: "The Engine appreciates neural culturalism: your childhood culture didn't just teach you how to think about yourself - it changed how your brain literally represents the concept of 'self' at the neural level!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The stories, movies, and books you loved as a child continue to influence your adult expectations about relationships, success, and life meaning.",
        correct_answer: true,
        value: 21,
        stance: "nurture",
        correct_feedback: "Narratively brilliant! Those childhood stories weren't just entertainment - they were cultural programming about how life works, what to expect from relationships, what success looks like, and what makes life meaningful. Your inner romantic, hero, or cynic has literary origins!",
        incorrect_feedback: "Childhood narratives provide powerful templates for understanding life patterns, relationship dynamics, and personal meaning that continue to influence adult expectations and interpretations.",
        engine_commentary: "The Engine recognizes narrative programming: the stories that captivated your childhood imagination provided the plot templates you still use to understand your adult life adventures!"
    },

    {
        type: "mc_question",
        question: "If you could observe your 8-year-old self learning culture, you would probably see:",
        options: {
            "A": "A passive child absorbing whatever culture provided",
            "B": "A rebellious child rejecting most cultural messages",
            "C": "An active child selectively engaging with culture based on temperament and interest",
            "D": "A confused child overwhelmed by cultural complexity"
        },
        correct_answer_key: "C",
        value: 20,
        stance: "neutral",
        correct_feedback: "Observationally wise! Your 8-year-old self was probably a sophisticated cultural consumer - paying attention to messages that resonated with your temperament, ignoring ones that didn't fit, and actively experimenting with different cultural identities. Cultural entrepreneurship in action!",
        incorrect_feedback: "Children are active cultural agents who selectively attend to, experiment with, and incorporate cultural elements that match their developing sense of identity and natural inclinations.",
        engine_commentary: "The Engine imagines cultural apprenticeship: your child self was like a cultural scientist, running experiments in identity and social belonging while building your unique version of cultural competence!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you're curious about how culture shapes development suggests that your childhood cultural experiences included messages about the value of questioning and understanding social processes.",
        correct_answer: true,
        value: 23,
        stance: "nurture",
        correct_feedback: "Meta-culturally astute! Your current interest in cultural analysis probably reflects childhood exposure to cultures that valued critical thinking, questioning, and understanding how social systems work. You internalized a culture of inquiry that's now examining... culture itself!",
        incorrect_feedback: "Interest in cultural analysis typically reflects childhood exposure to cultural values that emphasize critical thinking, questioning, and systematic understanding of social phenomena.",
        engine_commentary: "The Engine achieves cultural meta-analysis: the cultural programming that taught you to question cultural programming is now being used to analyze how cultural programming works. Recursive cultural consciousness!"
    },

    {
        type: "factoid",
        text: "Children from cultures with strong storytelling traditions develop different narrative abilities and memory organization compared to children from more information-focused cultures, affecting how they understand and communicate about their experiences throughout life.",
        value: 14,
        stance: "nurture",
        engine_commentary: "The Engine appreciates narrative inheritance: your childhood culture's storytelling style didn't just entertain you - it gave you the mental frameworks you still use to organize memory and make sense of experience!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your adult political and social values mostly reflect rational analysis of issues rather than cultural programming from childhood.",
        correct_answer: false,
        value: 25,
        stance: "nurture",
        correct_feedback: "Politically perceptive! While we like to think our values come from rational analysis, research shows they're heavily influenced by childhood cultural absorption - family political discussions, community values, cultural narratives about fairness and authority. Your political brain has deep cultural roots!",
        incorrect_feedback: "Research reveals that political and social values are largely shaped by early cultural learning rather than purely rational adult analysis, though people often believe their values are rationally derived.",
        engine_commentary: "The Engine observes ideological archaeology: your passionate political convictions can often be traced back to dinner table conversations, community values, and cultural stories you absorbed long before you could vote!"
    },

    {
        type: "mc_question",
        question: "Looking back at your childhood cultural learning, the most remarkable thing is probably:",
        options: {
            "A": "How much you absorbed without realizing it",
            "B": "How you managed to develop your own identity despite cultural pressure",
            "C": "How your temperament and culture collaborated to create your unique self",
            "D": "How similar you are to others from your cultural background"
        },
        correct_answer_key: "C",
        value: 22,
        stance: "neutral",
        correct_feedback: "Developmentally profound! The most amazing thing is probably how your individual temperament and your cultural environment worked together like dance partners - each influencing the other to create something that neither could have produced alone. You're a unique nature-culture collaboration!",
        incorrect_feedback: "The most remarkable aspect of cultural development is typically the collaborative interaction between individual temperament and cultural environment that creates unique identity patterns.",
        engine_commentary: "The Engine celebrates collaborative creation: you weren't just shaped by culture OR expressing your nature - you were co-creating yourself through the dynamic interaction between your temperament and your cultural world!"
    }
];
