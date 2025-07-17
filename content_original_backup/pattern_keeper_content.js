// Add this at the very beginning of your pattern_keeper_content.js file
function getLoopContent() {
    return patternKeeperContent;
}

// This file contains the content pool for "The Pattern Keeper" loop (Ages 35-65).
// It must be loaded BEFORE game_logic.js in your HTML.

const patternKeeperContent = [
    // Genetic Stability Items (Nature-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: People's core personality traits become essentially fixed by middle age, with only minor surface changes possible after age 40.",
        correct_answer: false,
        value: 22,
        stance: "nurture",
        correct_feedback: "Surprisingly false! Research shows significant personality change can occur throughout midlife through new relationships, career challenges, therapy, major life events, and conscious effort. Your 45-year-old brain is still remarkably plastic and changeable!",
        incorrect_feedback: "Modern research reveals that personality continues evolving throughout midlife, with people capable of significant changes in traits like openness, conscientiousness, and emotional stability well into their 60s and beyond.",
        engine_commentary: "The Engine appreciates midlife malleability: your established personality patterns aren't permanent installations - they're more like software that can still receive major updates, even decades after the original programming!"
    },

    {
        type: "mc_question",
        question: "When midlife adults experience major career changes, relationship shifts, or new challenges, they typically:",
        options: {
            "A": "Rely on completely fixed personality traits that can't adapt",
            "B": "Discover new aspects of themselves they didn't know existed",
            "C": "Revert to childhood personality patterns under stress",
            "D": "Become unable to learn new skills or behaviors"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "nurture",
        correct_feedback: "Discovery-wise! Midlife challenges often reveal hidden capacities, dormant interests, and new strengths. That shy person who becomes a confident public speaker, or that analytical person who develops artistic talents - midlife is full of personality plot twists!",
        incorrect_feedback: "Research shows that midlife challenges and transitions often activate previously unexpressed aspects of personality and can lead to significant personal growth and development.",
        engine_commentary: "The Engine observes midlife revelations: your established personality was apparently just the trailer for the full movie - midlife gets to premiere whole new character developments you didn't know were possible!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The stability people feel in their established personality patterns is mostly an illusion created by consistent environments and social roles.",
        correct_answer: true,
        value: 18,
        stance: "nurture",
        correct_feedback: "Perceptively true! Your personality feels stable partly because you've created consistent environments and relationships that reinforce familiar patterns. Change the environment significantly, and hidden personality potentials often emerge!",
        incorrect_feedback: "Personality stability is partly maintained by environmental consistency - when people encounter dramatically new environments or challenges, significant personality changes often become apparent.",
        engine_commentary: "The Engine notes environmental scaffolding: your 'stable' personality might be more like a performance that's been running in the same theater for decades - change the stage and discover new acting abilities!"
    },

    {
        type: "factoid",
        text: "Longitudinal studies following people from age 30 to 60 show that about 40% experience significant personality changes during midlife - often becoming more open, confident, or emotionally stable than they were in young adulthood.",
        value: 16,
        stance: "nurture",
        engine_commentary: "The Engine celebrates midlife metamorphosis: nearly half of people literally become different versions of themselves during midlife - your personality apparently has expansion packs available for download!"
    },

    // Lifelong Plasticity Items (Nurture-focused)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Adults who consciously work on changing ingrained patterns (through therapy, mindfulness, or intentional practice) can achieve changes that seemed impossible in their younger years.",
        correct_answer: true,
        value: 24,
        stance: "nurture",
        correct_feedback: "Transformatively true! Midlife brings both motivation for change (life perspective) and capacity for change (neuroplasticity + wisdom). Many people overcome lifelong patterns of anxiety, relationship difficulties, or limiting beliefs during midlife more successfully than they could in youth!",
        incorrect_feedback: "Research demonstrates that conscious efforts at personal change often become more effective during midlife due to increased self-awareness, motivation, and accumulated life skills.",
        engine_commentary: "The Engine appreciates conscious reprogramming: your midlife brain has both the technical knowledge and user experience needed to successfully edit its own operating system in ways that younger brains couldn't manage!"
    },

    {
        type: "mc_question",
        question: "People who make significant life changes during midlife (career pivots, relationship changes, lifestyle shifts) often report:",
        options: {
            "A": "Feeling like they're betraying their true nature",
            "B": "Discovering aspects of themselves that feel more authentic than their previous identity",
            "C": "Experiencing complete personality chaos and confusion",
            "D": "Returning to exactly who they were in their twenties"
        },
        correct_answer_key: "B",
        value: 21,
        stance: "nurture",
        correct_feedback: "Authentically insightful! Many midlife changers report feeling 'more like themselves' after major transitions - as if they're finally expressing previously suppressed aspects of their identity. Sometimes change reveals authenticity rather than betraying it!",
        incorrect_feedback: "Research shows that successful midlife transitions often lead to increased sense of authenticity and self-alignment rather than identity confusion or loss.",
        engine_commentary: "The Engine observes authentic emergence: perhaps your 'established' personality was actually a compromise formation, and midlife changes represent your authentic self finally getting permission to emerge!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The brain's neuroplasticity (ability to form new neural connections) remains significant throughout middle age, allowing for genuine learning and behavioral change.",
        correct_answer: true,
        value: 19,
        stance: "nurture",
        correct_feedback: "Neuroplastically encouraging! While peak plasticity occurs in youth, the adult brain retains remarkable capacity for forming new neural pathways throughout midlife. You can literally rewire your brain at 50 just as genuinely as at 20!",
        incorrect_feedback: "Neuroscience research confirms that significant neuroplasticity persists throughout adulthood, enabling genuine learning, behavioral change, and even recovery from brain injuries well into midlife and beyond.",
        engine_commentary: "The Engine celebrates neural renovation: your midlife brain is like a house that can still undergo major renovations - the foundation is set, but the interior design remains surprisingly flexible!"
    },

    {
        type: "factoid",
        text: "Adults who learn new languages, musical instruments, or complex skills during midlife show measurable increases in gray matter and cognitive flexibility, proving the brain's continued capacity for growth.",
        value: 17,
        stance: "nurture",
        engine_commentary: "The Engine appreciates cognitive construction: your midlife brain doesn't just maintain itself - it can literally build new cognitive architecture when challenged with novel learning experiences!"
    },

    // Bridge/Integration Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: Your midlife personality reflects both the accumulated stability of genetic traits AND the accumulated effects of decades of environmental experiences and conscious choices.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Developmentally sophisticated! Your midlife self is both more genetically stable (core temperament evident) AND more environmentally sculpted (decades of experience) than your younger self. You're simultaneously more yourself and more shaped by life than ever before!",
        incorrect_feedback: "Midlife personality represents the complex interaction between genetic trait stability and accumulated environmental influences working together over decades of development.",
        engine_commentary: "The Engine appreciates temporal complexity: your midlife self is like a tree that's both more clearly its genetic species AND more shaped by decades of environmental weather patterns than it was as a sapling!"
    },

    {
        type: "mc_question",
        question: "The most accurate way to understand midlife personality is:",
        options: {
            "A": "Genetic traits finally expressing themselves without environmental interference",
            "B": "Environmental conditioning completely overriding natural tendencies",
            "C": "A dynamic balance between established patterns and ongoing plasticity",
            "D": "Random personality chaos as youth patterns break down"
        },
        correct_answer_key: "C",
        value: 23,
        stance: "neutral",
        correct_feedback: "Balancedly brilliant! Midlife personality is both more stable (established patterns) AND more changeable (accumulated wisdom + neuroplasticity) than younger years. You have both deep roots and continuing growth potential!",
        incorrect_feedback: "Midlife development involves the dynamic interaction between accumulated stability and ongoing capacity for change rather than either complete fixation or complete chaos.",
        engine_commentary: "The Engine models dynamic equilibrium: your midlife personality is like a river that's both carved a distinctive channel AND continues flowing and changing shape based on new environmental conditions!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you're exploring questions about personality change during midlife suggests that your capacity for self-reflection and growth is itself evidence of ongoing development.",
        correct_answer: true,
        value: 20,
        stance: "neutral",
        correct_feedback: "Meta-developmentally profound! Your ability to question your own patterns is itself a sophisticated developmental achievement that probably wasn't available to your younger self. Self-awareness as continuing development!",
        incorrect_feedback: "The capacity for sophisticated self-reflection about personal patterns represents ongoing cognitive and emotional development that often peaks during midlife rather than ending in youth.",
        engine_commentary: "The Engine achieves reflective recursion: the midlife capacity to examine your own personality development is itself evidence that personality development hasn't stopped but has reached new levels of self-aware sophistication!"
    },

    // Playful/Humorous Items
    {
        type: "mc_question",
        question: "Your midlife style choices (clothing, home decor, entertainment preferences) probably reflect:",
        options: {
            "A": "Finally expressing your authentic genetic taste preferences",
            "B": "Accumulated cultural influences and learned aesthetic patterns",
            "C": "Rebellion against or embrace of previous life stage identities",
            "D": "All of the above in a beautifully complex style evolution"
        },
        correct_answer_key: "D",
        value: 18,
        stance: "neutral",
        correct_feedback: "Stylistically sophisticated! Your midlife aesthetic reflects genetic preferences (colors/patterns you've always loved), environmental learning (what you've discovered works), AND conscious identity choices (embracing or rejecting previous versions of yourself). Your style has quite a developmental biography!",
        incorrect_feedback: "Midlife style choices emerge from genetic preferences, accumulated learning, and conscious identity evolution working together to create distinctive personal aesthetics.",
        engine_commentary: "The Engine appreciates aesthetic archaeology: your current style choices are like layers of personality sediment - genetic preferences, environmental learning, and conscious identity curation all visible in your closet!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: If you could observe your 45-year-old self, you would probably recognize both deep continuities with your younger self AND surprising developments you couldn't have predicted.",
        correct_answer: true,
        value: 17,
        stance: "neutral",
        correct_feedback: "Temporally wise! Your midlife self would probably feel both familiar (same core temperament) and surprising (new capacities, interests, wisdom) to your younger self. Developmental continuity with plot twists!",
        incorrect_feedback: "Midlife development typically involves both recognizable continuity with earlier personality patterns and unexpected growth or changes that weren't predictable from younger years.",
        engine_commentary: "The Engine imagines temporal recognition: your midlife self is probably like a familiar friend who's had fascinating life experiences - recognizably the same person but with interesting new chapters added!"
    },

    {
        type: "factoid",
        text: "Many people report that their biggest personality changes happened not in their twenties but in their forties and fifties, when life experience gave them both permission and wisdom to become more authentically themselves.",
        value: 15,
        stance: "neutral",
        engine_commentary: "The Engine celebrates midlife emergence: perhaps youth is for trying on personalities while midlife is for finally settling into the one that actually fits your authentic self!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your current parenting style (if applicable) probably represents both conscious attempts to improve on your own childhood experiences AND unconscious repetition of family patterns.",
        correct_answer: true,
        value: 16,
        stance: "neutral",
        correct_feedback: "Parentally recursive! Your parenting reflects conscious evolution (doing better than your parents) AND unconscious inheritance (repeating patterns you swore you'd avoid). Each generation tries to debug the previous generation's parenting code!",
        incorrect_feedback: "Parenting patterns typically involve both conscious attempts to improve on one's own childhood experiences and unconscious repetition of familiar family dynamics.",
        engine_commentary: "The Engine recognizes generational debugging: your parenting style is like software that's both consciously upgraded from the previous version AND still running some legacy code from your childhood family system!"
    },

    // Advanced/Research Items
    {
        type: "video",
        title: "Midlife Development - The Psychology of Middle Age",
        url: "https://www.youtube.com/embed/7XKTBdSqHZw",
        value: 18,
        stance: "neutral",
        engine_commentary: "The Engine processes midlife complexity: watching midlife development reveals it's not decline but transformation - a unique developmental stage with its own growth opportunities and challenges!"
    },

    {
        type: "mc_question",
        question: "Research on 'midlife crisis' suggests that this phenomenon is:",
        options: {
            "A": "A universal biological phase that all humans experience",
            "B": "A culturally-constructed expectation that becomes self-fulfilling",
            "C": "Evidence of personality breakdown requiring professional intervention",
            "D": "A healthy developmental transition that can lead to growth"
        },
        correct_answer_key: "D",
        value: 24,
        stance: "neutral",
        correct_feedback: "Crisis-wise! Research shows 'midlife crisis' is often actually healthy development - questioning previous choices, exploring unlived possibilities, and integrating life experience into new identity. Crisis as conscious reconstruction!",
        incorrect_feedback: "Research reveals that midlife transitions, while challenging, often represent healthy developmental processes of life review, identity integration, and conscious growth rather than pathological breakdown.",
        engine_commentary: "The Engine reframes midlife crisis: perhaps what looks like breakdown is actually breakthrough - the personality system upgrading itself based on accumulated life data and emerging wisdom!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: People who successfully navigate midlife transitions often become more emotionally stable, self-aware, and satisfied with life than they were in their twenties or thirties.",
        correct_answer: true,
        value: 22,
        stance: "neutral",
        correct_feedback: "Developmentally encouraging! Midlife often brings emotional maturation, clearer priorities, and hard-won wisdom that creates greater life satisfaction than the uncertainty and intensity of younger years. Experience as emotional education!",
        incorrect_feedback: "Research shows that successful midlife development often leads to increased emotional stability, self-awareness, and life satisfaction compared to earlier adult stages.",
        engine_commentary: "The Engine appreciates experiential wisdom: your midlife emotional stability isn't just personality settling - it's the result of decades of emotional education and life experience creating genuine wisdom!"
    },

    {
        type: "factoid",
        text: "Adults who experience major life transitions during midlife (divorce, career change, geographic moves) often show increased creativity, openness to experience, and cognitive flexibility compared to those who maintain stable patterns.",
        value: 19,
        stance: "nurture",
        engine_commentary: "The Engine observes transition benefits: major midlife changes might not just disrupt stability - they might actually enhance cognitive and creative capacities by forcing the brain to develop new adaptive strategies!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your midlife relationship patterns (friendships, partnerships, family dynamics) reflect both learned patterns from earlier relationships AND conscious choices based on accumulated relationship wisdom.",
        correct_answer: true,
        value: 21,
        stance: "neutral",
        correct_feedback: "Relationally evolved! Your midlife relationships reflect both inherited patterns (family dynamics, early attachment) AND earned wisdom (learning from previous relationship experiences). Your relationship style has a learning curve!",
        incorrect_feedback: "Midlife relationship patterns typically combine inherited patterns from early experiences with consciously developed relationship skills and wisdom accumulated through previous relationship experiences.",
        engine_commentary: "The Engine recognizes relational evolution: your midlife relationship style is like relationship software that's been updated through decades of user experience - still running some original code but with major functional improvements!"
    },

    {
        type: "mc_question",
        question: "When midlife adults look back at their younger selves, they typically feel:",
        options: {
            "A": "Regret that they've changed so much from their authentic younger self",
            "B": "Gratitude for growth while recognizing continuity with their core self",
            "C": "Confusion about whether they're the same person or completely different",
            "D": "Nostalgia for simpler times when their personality was more stable"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "neutral",
        correct_feedback: "Retrospectively wise! Most midlife adults feel grateful for growth while recognizing core continuity - like they're still fundamentally themselves but with expanded capabilities and hard-won wisdom. Evolution, not replacement!",
        incorrect_feedback: "Research shows that midlife adults typically experience their development as growth and evolution rather than fundamental personality change or loss of authentic self.",
        engine_commentary: "The Engine appreciates developmental gratitude: your midlife perspective on your younger self is probably like looking at childhood photos - recognizably you but with visible growth and development that feels positive rather than threatening!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your current capacity to handle stress, conflict, and uncertainty was largely shaped by the accumulated practice of handling stress, conflict, and uncertainty throughout your earlier years.",
        correct_answer: true,
        value: 23,
        stance: "nurture",
        correct_feedback: "Stress-wise! Your midlife emotional regulation reflects decades of practice dealing with challenges. Each difficult situation was training for better handling of future difficulties. Your calmness has a developmental resume!",
        incorrect_feedback: "Midlife emotional regulation and stress management abilities are largely the result of accumulated practice and learning from previous challenging experiences rather than just genetic temperament.",
        engine_commentary: "The Engine recognizes emotional training: your midlife capacity to handle life's challenges isn't just personality - it's the result of decades of emotional training through real-world experience!"
    },

    {
        type: "factoid",
        text: "Studies show that people who embrace conscious personal growth during midlife often experience a 'second adolescence' of identity exploration, but with the wisdom and resources that adolescents lack.",
        value: 14,
        stance: "nurture",
        engine_commentary: "The Engine appreciates wise rebellion: midlife identity exploration is like adolescence with a graduate degree - same curiosity and change potential but with adult resources and accumulated wisdom!"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you're engaging with questions about midlife development suggests that you're actively participating in the ongoing process of understanding and potentially reshaping your own patterns.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Meta-developmentally excellent! Your exploration of developmental questions IS development - conscious examination of your own patterns with potential for insight-driven change. Self-awareness as active personal evolution!",
        incorrect_feedback: "Engagement with developmental content represents active participation in ongoing personal development through increased self-awareness and potential for conscious pattern modification.",
        engine_commentary: "The Engine achieves midlife recursion: your investigation of how development works in midlife is itself a sophisticated form of midlife development - consciousness examining and potentially upgrading itself!"
    },

    {
        type: "mc_question",
        question: "Looking back at your pattern-keeping and pattern-changing in midlife, the most remarkable thing is probably:",
        options: {
            "A": "How much your core personality has remained exactly the same",
            "B": "How much you've changed beyond recognition from your younger self",
            "C": "How you've maintained core identity while developing new capacities and wisdom",
            "D": "How random and unpredictable your personality changes have been"
        },
        correct_answer_key: "C",
        value: 22,
        stance: "neutral",
        correct_feedback: "Developmentally sophisticated! The most remarkable thing is probably how you've managed both continuity (recognizably yourself) AND growth (expanded capacities, deeper wisdom) simultaneously. You're both the same person and an upgraded version!",
        incorrect_feedback: "The most remarkable aspect of midlife development is typically the successful integration of identity continuity with personal growth and expanded capabilities.",
        engine_commentary: "The Engine celebrates integrated development: your midlife achievement is being both deeply yourself AND continuously evolving - like software that maintains core functionality while adding powerful new features!"
    }
];
