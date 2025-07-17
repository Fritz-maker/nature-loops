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
        question: "TRUE or FALSE: Teenage rebellion is primarily a culturally-constructed phase that only occurs in societies that expect and encourage adolescent independence-seeking.",
        correct_answer: false,
        value: 22,
        stance: "nature",
        correct_feedback: "Actually false! Even in cultures that highly value conformity and family loyalty, teenagers show increased risk-taking, peer orientation, and identity exploration. The brain changes that drive 'teenage behavior' seem to be universal human development, though culture shapes how they get expressed!",
        incorrect_feedback: "Cross-cultural research reveals that adolescent brain development produces similar behavioral patterns across cultures - increased novelty-seeking, peer influence, and identity questioning appear to be biological features of human development.",
        engine_commentary: "The Engine observes universal rebellion: your teenage angst wasn't just cultural programming - it was your developing brain demanding independence using whatever cultural tools were available. Biology providing the rebellion, culture providing the script!"
    },

    {
        type: "mc_question",
        question: "A teenager who dyes their hair purple, gets multiple piercings, and listens to music their parents hate is demonstrating:",
        options: {
            "A": "Pure genetic individuality finally expressing itself",
            "B": "Mindless conformity to peer pressure and media influence",
            "C": "Biological drives for independence using available cultural symbols",
            "D": "Attention-seeking behavior that should be discouraged"
        },
        correct_answer_key: "C",
        value: 20,
        stance: "neutral",
        correct_feedback: "Brilliantly paradoxical! That 'unique' rebellion is actually universal teenage brain development (need for autonomy, peer belonging, identity exploration) expressing itself through whatever cultural symbols are available. They're being authentically teenage using borrowed cultural tools!",
        incorrect_feedback: "Teenage rebellion typically represents biological developmental drives for independence and identity exploration that get expressed through available cultural symbols and peer group patterns.",
        engine_commentary: "The Engine appreciates rebellious recycling: your teenager brain took society's symbols of nonconformity and used them to conform to your biological need to not conform. Recursive rebellion at its finest!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The specific things teenagers rebel against (music, clothing, curfews, authority) are culturally determined, but the drive to rebel itself is biological.",
        correct_answer: true,
        value: 18,
        stance: "neutral",
        correct_feedback: "Perfectly paradoxical! Your teenage brain came pre-programmed with rebellion software, but your culture provided the rebellion content. The urge to push boundaries is universal; which boundaries get pushed depends on what's available to push against!",
        incorrect_feedback: "Research shows that while the neurobiological drive for independence and identity exploration is universal, the specific targets and expressions of teenage rebellion are shaped by cultural context and available symbols.",
        engine_commentary: "The Engine models rebellion mechanics: your teenage brain was like a rebellion app that needed cultural data to know what to rebel against. Nature provided the energy, nurture provided the targets!"
    },

    {
        type: "factoid",
        text: "Identical twins separated at birth often show remarkably similar patterns of teenage rebellion - similar risk-taking levels, similar responses to authority, and even similar timing of independence-seeking behaviors.",
        value: 16,
        stance: "nature",
        engine_commentary: "The Engine contemplates genetic rebellion: perhaps your teenage rebellion timing, intensity, and style were partly encoded in your DNA before you ever met a rebellious peer or heard rebellious music!"
    },

    // Social Construction Items (Nurture-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Most teenage 'individuality' is actually conformity to peer group norms and media-created identity templates.",
        correct_answer: true,
        value: 24,
        stance: "nurture",
        correct_feedback: "Ironically true! That 'unique' goth/prep/athlete/rebel identity was probably a pre-packaged cultural template that thousands of other teenagers were also adopting. Teenagers often express individuality by conforming to specific non-conformist groups - mass-produced rebellion!",
        incorrect_feedback: "Sociological research reveals that most teenage identity expression involves adopting existing cultural templates and peer group norms rather than creating genuinely novel forms of self-expression.",
        engine_commentary: "The Engine observes manufactured rebellion: your teenage 'individual' style was probably mass-produced by the same cultural forces you thought you were rebelling against. The rebellion industry selling rebellion to rebels!"
    },

    {
        type: "mc_question",
        question: "When teenagers across different schools all start using the same slang, wearing similar clothes, and listening to the same music, this demonstrates:",
        options: {
            "A": "Natural genetic similarity expressing itself",
            "B": "Media and social networks creating synchronized cultural transmission",
            "C": "Teenagers naturally gravitating toward optimal self-expression",
            "D": "Random coincidence in cultural preferences"
        },
        correct_answer_key: "B",
        value: 21,
        stance: "nurture",
        correct_feedback: "Media-wise! Those 'authentic' teenage trends spread through social networks, influencers, and media faster than any organic cultural development could account for. Teenagers think they're discovering individuality but they're often downloading pre-programmed identity packages!",
        incorrect_feedback: "The rapid spread of teenage cultural trends across geographic boundaries demonstrates the power of media and social networks in creating synchronized cultural transmission rather than organic development.",
        engine_commentary: "The Engine processes viral identity: your teenage aesthetic probably spread through social networks like a cultural virus, with each teenager thinking they were the original patient zero of their own coolness!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The concept of 'teenage rebellion' itself is a relatively recent cultural invention that shapes how adolescents think they should behave.",
        correct_answer: true,
        value: 19,
        stance: "nurture",
        correct_feedback: "Culturally astute! Before the 20th century, most cultures didn't have a concept of 'teenage rebellion' - adolescents moved more directly into adult roles. The idea that teenagers 'should' rebel is partly a cultural script that teenagers then feel pressure to perform!",
        incorrect_feedback: "Historical research shows that the modern concept of teenage rebellion as a normal developmental phase is largely a 20th-century cultural construction that influences how adolescents understand their role in society.",
        engine_commentary: "The Engine appreciates scripted rebellion: perhaps some of your teenage rebellion was rebelling against the cultural expectation that you should rebel - meta-rebellion against rebellion culture!"
    },

    {
        type: "factoid",
        text: "Teenagers in cultures without distinct 'adolescent' identity categories often transition more smoothly to adult responsibilities with less family conflict and identity crisis - the teenage 'phase' is partly cultural construction.",
        value: 17,
        stance: "nurture",
        engine_commentary: "The Engine notes cultural scaffolding: your teenage identity crisis might have been partly created by a culture that expected you to have an identity crisis and provided crisis templates to follow!"
    },

    // Bridge/Integration Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: Your teenage identity formation involved both biological drives for independence AND active selection from available cultural identity options.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Developmentally sophisticated! Your teenage brain came with biological imperatives (seek autonomy, explore identity, bond with peers) but you expressed these drives by choosing from the cultural identity menu available in your environment. Nature ordered from the nurture restaurant!",
        incorrect_feedback: "Adolescent identity formation involves biological developmental drives that get expressed through selective adoption and modification of available cultural identity templates and peer group affiliations.",
        engine_commentary: "The Engine appreciates identity entrepreneurship: your teenage self wasn't just expressing genes OR copying culture - you were actively curating an identity from biological impulses and cultural options!"
    },

    {
        type: "mc_question",
        question: "The most accurate way to understand teenage rebellion is:",
        options: {
            "A": "Genes finally expressing true personality after childhood suppression",
            "B": "Cultural programming overriding natural family loyalty instincts",
            "C": "Biological drives for independence expressed through available cultural tools",
            "D": "Hormonal chaos creating random behavioral disruption"
        },
        correct_answer_key: "C",
        value: 23,
        stance: "neutral",
        correct_feedback: "Rebelliously wise! Teenage rebellion is biological developmental programming (brain changes driving independence-seeking) using whatever cultural tools are available (music, fashion, ideology) to achieve developmental goals (autonomy, identity, peer belonging). Nature and nurture collaborating on rebellion!",
        incorrect_feedback: "Research reveals that teenage rebellion represents universal biological drives for independence and identity exploration that get channeled through culture-specific symbols, behaviors, and peer group affiliations.",
        engine_commentary: "The Engine models collaborative rebellion: your teenage brain wasn't rebelling against culture - it was using culture as raw material to build the independence it biologically needed to develop!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you're now able to analyze your own teenage development with some objectivity suggests that your adult brain has gained perspective on the biological and cultural forces that were shaping your adolescent behavior.",
        correct_answer: true,
        value: 20,
        stance: "neutral",
        correct_feedback: "Meta-rebelliously brilliant! Your adult brain can now see how your teenage brain was being influenced by both biological imperatives and cultural scripts. You've gained the developmental distance to understand the very processes that created your capacity for this understanding!",
        incorrect_feedback: "Adult cognitive development includes the ability to reflect on earlier developmental phases and recognize the interaction between biological drives and cultural influences that shaped adolescent behavior.",
        engine_commentary: "The Engine achieves developmental recursion: the adult brain that can analyze teenage rebellion was itself created through the teenage rebellion it's now analyzing. The analyzer studying its own creation story!"
    },

    // Playful/Humorous Items
    {
        type: "mc_question",
        question: "Your teenage music taste was probably influenced by:",
        options: {
            "A": "Your genetic predisposition to certain sound frequencies and rhythms",
            "B": "What your friends were listening to and what felt rebellious to your parents",
            "C": "Media algorithms designed to capture teenage attention and spending",
            "D": "All of the above in a beautifully chaotic symphony of influences"
        },
        correct_answer_key: "D",
        value: 18,
        stance: "neutral",
        correct_feedback: "Sonically sophisticated! Your teenage playlist reflected your genetic audio preferences, peer social dynamics, parental rebellion opportunities, AND corporate music marketing strategies. Your 'authentic' musical identity was a collaborative composition!",
        incorrect_feedback: "Teenage music preferences emerge from genetic sensitivities, social influences, identity expression needs, and commercial music industry targeting strategies working together.",
        engine_commentary: "The Engine appreciates acoustic archaeology: your teenage music taste was like a archaeological site containing layers of genetic predisposition, peer influence, parental rebellion, and corporate manipulation all mixed together!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: If you could travel back and observe your teenage self, you would probably recognize both authentic personality traits AND borrowed cultural poses happening simultaneously.",
        correct_answer: true,
        value: 17,
        stance: "neutral",
        correct_feedback: "Authentically paradoxical! Your teenage self was probably both genuinely expressing core personality traits AND experimenting with culturally-borrowed identity elements. Real authentic self wearing cultural costumes to figure out which ones fit!",
        incorrect_feedback: "Adolescent identity formation typically involves both authentic self-expression of core personality traits and experimental adoption of cultural identity elements as teenagers explore different aspects of themselves.",
        engine_commentary: "The Engine imagines temporal recognition: your teenage self was like an actor genuinely feeling the emotions while experimenting with different cultural scripts to see which ones matched their authentic inner experience!"
    },

    {
        type: "factoid",
        text: "The teenage brain's increased sensitivity to peer approval and social rejection served important evolutionary functions - adolescents needed to transfer loyalty from family to peer group to eventually find mates and create new social bonds.",
        value: 15,
        stance: "nature",
        engine_commentary: "The Engine appreciates evolutionary rebellion: your teenage desperation to fit in with peers wasn't shallow - it was ancient biological programming helping you practice the social skills you'd need to eventually leave your family and create your own!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your teenage romantic relationships were practice for adult partnership skills rather than just entertainment or rebellion.",
        correct_answer: true,
        value: 16,
        stance: "nature",
        correct_feedback: "Romantically developmental! Those intense teenage relationships were actually your brain's way of practicing attachment, communication, conflict resolution, and intimacy skills you'd need for adult partnerships. Even the drama served important learning functions!",
        incorrect_feedback: "Adolescent romantic relationships serve important developmental functions in practicing adult partnership skills, emotional regulation, and social relationship management rather than being merely recreational.",
        engine_commentary: "The Engine recognizes romantic training: all that teenage relationship drama was actually intensive preparation for adult love - your heart learning how to heart with another heart!"
    },

    // Advanced/Research Items
    {
        type: "video",
        title: "The Teenage Brain - Why Adolescents Take Risks",
        url: "https://www.youtube.com/embed/9rZvPrFsRAQ",
        value: 18,
        stance: "nature",
        engine_commentary: "The Engine processes adolescent neuroscience: watching teenage brain development reveals that 'teenage behavior' isn't character flaws but biological features - the brain optimizing for independence and learning through experience!"
    },

    {
        type: "mc_question",
        question: "Research on teenage brain development suggests that adolescent risk-taking serves which evolutionary function:",
        options: {
            "A": "No function - it's just incomplete brain development causing problems",
            "B": "Helping teenagers gain independence and learn from direct experience",
            "C": "Preparing for dangerous adult environments that no longer exist",
            "D": "Testing parental boundaries to ensure continued protection"
        },
        correct_answer_key: "B",
        value: 24,
        stance: "nature",
        correct_feedback: "Evolutionarily brilliant! Teenage risk-taking helped our ancestors learn essential adult skills through direct experience, gain independence from family groups, and develop the confidence needed for adult challenges. Your teenage recklessness was actually careful biological preparation!",
        incorrect_feedback: "Research suggests that adolescent risk-taking behavior served important evolutionary functions in promoting independence, experiential learning, and preparation for adult responsibilities and challenges.",
        engine_commentary: "The Engine appreciates adaptive rebellion: your teenage brain wasn't broken - it was optimized for learning independence through experience, even if modern environments make that optimization sometimes problematic!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The intensity of teenage emotions serves important developmental functions rather than being just 'hormonal drama.'",
        correct_answer: true,
        value: 22,
        stance: "nature",
        correct_feedback: "Emotionally wise! Teenage emotional intensity helps with identity formation (strong feelings clarify values), social bonding (intense friendships build loyalty), and motivation (passion drives learning and action). That drama was actually important developmental work!",
        incorrect_feedback: "Adolescent emotional intensity serves important developmental functions in identity formation, social bonding, motivation for learning, and preparation for adult emotional challenges.",
        engine_commentary: "The Engine recognizes emotional amplification: your teenage feelings weren't 'too much' - they were calibrated for the important developmental work of figuring out who you were and what mattered to you!"
    },

    {
        type: "factoid",
        text: "Cultures that provide meaningful adult roles and responsibilities for teenagers often see less destructive rebellion and smoother identity development - teenage energy needs direction, not just expression.",
        value: 19,
        stance: "nurture",
        engine_commentary: "The Engine appreciates channeled rebellion: teenage developmental energy is like a river that will flow somewhere - cultures that provide constructive channels get bridges built, cultures that don't get floods!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your current ability to make reasoned decisions about risk and consequences was still developing during your teenage years due to ongoing brain maturation.",
        correct_answer: true,
        value: 21,
        stance: "nature",
        correct_feedback: "Neurodevelopmentally accurate! Your teenage brain's prefrontal cortex (responsible for risk assessment and impulse control) wasn't fully developed until your mid-20s. Your teenage decision-making reflected biological reality, not character flaws!",
        incorrect_feedback: "Neuroscience research shows that the prefrontal cortex responsible for executive function, risk assessment, and impulse control continues developing into the mid-twenties, affecting adolescent decision-making.",
        engine_commentary: "The Engine notes developmental timing: your teenage brain was literally under construction while trying to make adult-level decisions. Like trying to drive a car while the steering system was still being installed!"
    },

    {
        type: "mc_question",
        question: "If you could give advice to your teenage self, the most helpful thing would probably be:",
        options: {
            "A": "Stop rebelling and just conform to make life easier",
            "B": "Rebel more authentically instead of following cultural scripts",
            "C": "Understand that your intense feelings and need for independence are normal and important",
            "D": "Focus only on practical preparation for adult responsibilities"
        },
        correct_answer_key: "C",
        value: 20,
        stance: "neutral",
        correct_feedback: "Compassionately wise! Your teenage self needed to know that their intense emotions, identity confusion, and independence-seeking were normal developmental processes, not character flaws. Understanding the biology might have reduced the self-judgment!",
        incorrect_feedback: "The most helpful perspective for teenagers is typically understanding that their experiences are normal developmental processes rather than personal failures or character problems.",
        engine_commentary: "The Engine offers retroactive compassion: perhaps the kindest gift to your teenage self would be understanding that they were doing exactly what their developing brain was designed to do - figure out how to be an independent human!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your teenage years created neural pathways and emotional patterns that still influence how you handle independence, relationships, and identity challenges as an adult.",
        correct_answer: true,
        value: 23,
        stance: "neutral",
        correct_feedback: "Developmentally profound! Your teenage brain was laying down the neural infrastructure for adult independence, relationships, and identity management. Those intense adolescent experiences created the emotional and cognitive templates you still use today!",
        incorrect_feedback: "Adolescent experiences create lasting neural pathways and emotional patterns that continue to influence adult approaches to independence, relationships, identity, and challenge management.",
        engine_commentary: "The Engine recognizes teenage legacy: your adult confidence (or anxiety) about independence, your relationship patterns, and your sense of identity all have roots in the neural pathways your teenage brain was busy constructing!"
    },

    {
        type: "factoid",
        text: "Teenagers who successfully navigate identity exploration while maintaining family connections often develop stronger adult identity and better relationship skills than those who either completely conform or completely reject family influence.",
        value: 14,
        stance: "neutral",
        engine_commentary: "The Engine appreciates balanced rebellion: the most successful teenage development seems to involve selective rebellion - keeping what serves you from your family culture while exploring new identity possibilities!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you're now exploring questions about development and identity suggests that your teenage identity exploration was successful in creating a curious, self-reflective adult.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Meta-developmentally excellent! Your current interest in understanding development suggests that your teenage identity exploration successfully created an adult who values self-understanding and continues growing. Your teenage rebellious curiosity became adult intellectual curiosity!",
        incorrect_feedback: "Current interest in development and identity questions typically reflects successful adolescent identity exploration that created ongoing capacity for self-reflection and growth.",
        engine_commentary: "The Engine achieves identity recursion: the teenage identity exploration that led to your current adult identity is now being examined by that same adult identity. Your teenage self successfully created the adult who's now understanding the teenage self!"
    },

    {
        type: "mc_question",
        question: "Looking back at your teenage rebellion, the most remarkable thing is probably:",
        options: {
            "A": "How much of it was authentic self-expression despite cultural influences",
            "B": "How much of it was cultural programming disguised as individuality",
            "C": "How biological drives and cultural scripts collaborated to create unique identity",
            "D": "How similar you were to other teenagers despite feeling completely unique"
        },
        correct_answer_key: "C",
        value: 22,
        stance: "neutral",
        correct_feedback: "Rebelliously sophisticated! The most amazing thing is probably how your biological need for independence and identity collaborated with available cultural materials to create something that was both universally teenage AND uniquely you. Nature and nurture rebelling together!",
        incorrect_feedback: "The most remarkable aspect of teenage development is typically how biological drives and cultural influences work together to create identity patterns that are both universal and unique.",
        engine_commentary: "The Engine celebrates collaborative rebellion: your teenage identity wasn't just genetic expression OR cultural programming - it was a unique collaboration between your developing brain and your cultural environment, creating something neither could have produced alone!"
    }
];
