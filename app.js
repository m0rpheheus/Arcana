/* ============================================================
TAROT DATABASE — 78 Cards
─────────────────────────────────────────────────────────
img      → path to your card image, e.g. “images/major_00.jpg”
Leave as “” until your images are ready —
the symbol is shown as fallback.
symbol   → single-character or emoji fallback glyph
keywords → [3 strings] — these slot directly into the
position templates below. Write them carefully;
they are the raw ingredients of the reading.
meaning  → full interpretation shown in the modal.
Use <strong> and <em> for emphasis.
============================================================ */
const DB = [
// ── MAJOR ARCANA (0–21) ───────────────────────────────────
{id:“major_00”,name:“The Fool”,          img:””,symbol:“🌬”,keywords:[“new beginning”,“leap of faith”,“innocence”],meaning:“A threshold moment — the precipice before a great leap. <strong>Pure potential stirs</strong>; the universe asks you to trust what cannot yet be seen. The Fool carries everything needed and nothing unnecessary. Release the need for certainty and step forward with open hands. What feels like recklessness may simply be faith that has not yet been proven right.”},
{id:“major_01”,name:“The Magician”,       img:””,symbol:“✦”, keywords:[“manifestation”,“willpower”,“action”],meaning:“All four elements rest at your fingertips. <strong>Will meets skill meets opportunity.</strong> This is not luck — it is the moment your intention becomes the architect of reality. The tools have always been present; what changes now is your readiness to use them with focus and without apology. Act with precision. Speak what you intend to create.”},
{id:“major_02”,name:“The High Priestess”,img:””,symbol:“☽”, keywords:[“intuition”,“stillness”,“hidden truth”],meaning:“She guards the threshold between the known and the unknown. <strong>The answer you seek already lives within</strong>, quiet beneath the noise of the world. She does not explain — she reveals, and only to those willing to sit in stillness long enough to hear her. Suspend action. Resist the urge to force clarity. The truth is already present; it simply requires patience.”},
{id:“major_03”,name:“The Empress”,        img:””,symbol:“♀”, keywords:[“abundance”,“nurturing”,“creativity”],meaning:“Abundance is not a reward — it is a state of being. <strong>Allow yourself to receive</strong> without apology or diminishment. Something lush and life-giving is in the process of growing; your task is not to force it into shape but to tend it with patience, warmth, and trust. The Empress does not hustle. She ripens. Permit yourself the same grace.”},
{id:“major_04”,name:“The Emperor”,        img:””,symbol:“♜”, keywords:[“authority”,“structure”,“stability”],meaning:“Stability is an act of will, not circumstance. <strong>Define your structure before the world defines it for you.</strong> The Emperor does not wait for permission to occupy his authority — he assumes it, earns it, and then protects it with discipline. This is a call to establish clear boundaries, take full ownership of your domain, and build something that endures.”},
{id:“major_05”,name:“The Hierophant”,     img:””,symbol:“⛪”,keywords:[“tradition”,“conformity”,“guidance”],meaning:“Tradition carries encoded wisdom — but wisdom is not the same as obedience. <strong>Which beliefs are truly yours</strong>, and which were handed to you before you were old enough to choose? The Hierophant invites honest examination of inherited systems: what still serves, what has calcified into habit, and what must be consciously kept or released on your own terms.”},
{id:“major_06”,name:“The Lovers”,         img:””,symbol:“⟁”,keywords:[“alignment”,“choice”,“relationship”],meaning:“A fork in the road clothed in beauty. <strong>The deepest choices are rarely between good and evil</strong> — they are between two goods, two visions of yourself, two paths that each demand something real. What you choose here, you choose fully. Authentic alignment — with another, with a value, with a direction — requires vulnerability and cannot be arrived at halfway.”},
{id:“major_07”,name:“The Chariot”,        img:””,symbol:“⚡”,keywords:[“determination”,“control”,“victory”],meaning:”<strong>Victory through tension mastered, not eliminated.</strong> The opposing forces within and around you are not obstacles — they are the very fuel of forward motion. The Chariot does not ask for ease; it asks for will. Channel contradiction into momentum. You are more capable than the current resistance suggests, and considerably closer to the threshold than you think.”},
{id:“major_08”,name:“Strength”,           img:””,symbol:“∞”, keywords:[“courage”,“patience”,“inner power”],meaning:“The lion is not conquered with force but with presence. <strong>True power whispers</strong>; it does not shout. Strength here is not dominance — it is the quiet, unshakeable calm that holds a difficult thing without flinching and without cruelty. A quality you once dismissed as softness may be the precise instrument this moment requires. Gentleness, applied with full intention, is formidable.”},
{id:“major_09”,name:“The Hermit”,         img:””,symbol:“🕯”,keywords:[“introspection”,“solitude”,“wisdom”],meaning:“Withdrawal is not failure — it is discernment in action. <strong>Solitude becomes a lantern</strong> when used with intention; it illuminates what the noise of the world permanently obscures. The Hermit does not hide — he seeks. The next step cannot be found in the approval of others or the comfort of distraction. It reveals itself only in honest inner silence.”},
{id:“major_10”,name:“Wheel of Fortune”,   img:””,symbol:“⊙”, keywords:[“turning point”,“destiny”,“luck”],meaning:“The wheel turns, indifferent and inevitable. <strong>What rises will fall; what falls will rise.</strong> This is not a warning — it is a liberation. You are not fixed to any single point on the arc of fortune. The Wheel strips away the illusion of permanence from both suffering and success, asking instead: can you remain grounded regardless of which way the cycle currently turns?”},
{id:“major_11”,name:“Justice”,            img:””,symbol:“⚖”, keywords:[“fairness”,“truth”,“cause and effect”],meaning:“The universe keeps a precise ledger. <strong>Every action settles into consequence</strong> with mathematical inevitability — not as punishment, but as equilibrium restoring itself. Justice asks for honesty, not performance. Be truthful not to satisfy an audience but because integrity is the only currency that retains its value over time. What is fair, even when inconvenient, is what is real.”},
{id:“major_12”,name:“The Hanged Man”,     img:””,symbol:“⟳”,keywords:[“sacrifice”,“new perspective”,“waiting”],meaning:“The pause before clarity is not failure — it is the condition that makes clarity possible. <strong>Inversion reveals what upright living conceals.</strong> Something must be surrendered — a perspective released or a plan abandoned — before the new understanding can arrive. Stop. Look at this from the angle you have been avoiding. The discomfort of suspension is temporary; the insight it produces is not.”},
{id:“major_13”,name:“Death”,              img:””,symbol:“🌑”,keywords:[“ending”,“transformation”,“release”],meaning:“Not an ending, but a necessary transformation that endings make possible. <strong>What you have genuinely outgrown cannot simply be rearranged</strong> — it must be released entirely, with both hands, before something true can take its place. The door closing behind you is not punishment. It is the only reason the door ahead can open. What are you holding onto that, in your quietest moments, you already know is finished?”},
{id:“major_14”,name:“Temperance”,         img:””,symbol:“◇”,keywords:[“balance”,“patience”,“moderation”],meaning:“The art of the middle way demands far more courage than any extreme. <strong>Alchemical patience</strong> — this slow, careful blending of opposites — is creating something that urgency and force could never produce. Temperance does not suppress — it integrates. The apparent contradictions in your situation are not problems to be solved but ingredients to be held together long enough to become something greater than either alone.”},
{id:“major_15”,name:“The Devil”,          img:””,symbol:“⛓”,keywords:[“bondage”,“materialism”,“addiction”],meaning:”<strong>Look carefully: the chains in this image are loose.</strong> What binds you is not as solid as it appears; the lock is largely constructed in the mind and maintained by habit, fear, or the comfort of a familiar cage. Identify, with precision, what you are serving that does not serve you in return. The first step toward freedom is always the naming. The second step is far easier than the first.”},
{id:“major_16”,name:“The Tower”,          img:””,symbol:“⚡”,keywords:[“sudden upheaval”,“collapse”,“awakening”],meaning:“What is built on a false foundation must eventually fall — and the strike of lightning is mercy wearing an uncomfortable disguise. <strong>Destruction here is not punishment but the clearing of ground</strong> for something true. The Tower does not destroy what was real; it only destroys what was pretending to be. Let it go without grasping. What survives the fall was always the part worth keeping.”},
{id:“major_17”,name:“The Star”,           img:””,symbol:“★”, keywords:[“hope”,“healing”,“inspiration”],meaning:“After the storm, the open sky. <strong>Hope here is not wishful thinking but a quiet, cellular conviction</strong> that renewal is not only possible — it is already underway. The Star pours without hesitation or calculation, giving freely because abundance is its nature. You are not broken. You are in the process of being remade, and the light you see in the distance is not an illusion.”},
{id:“major_18”,name:“The Moon”,           img:””,symbol:“🌕”,keywords:[“illusion”,“fear”,“hidden truth”],meaning:“Reality is layered, and the surface is currently lying. <strong>Beneath the familiar landscape, something shifts</strong> in the tidal dark — an instinct half-heard, a fear half-understood, a truth not yet willing to step into full light. Fear and intuition wear the same face here; learn to distinguish them by what direction they pull you. Not everything in the shadows is dangerous, but not everything is safe either.”},
{id:“major_19”,name:“The Sun”,            img:””,symbol:“☀”, keywords:[“joy”,“success”,“vitality”],meaning:”<strong>Clarity without shadows. Joy that has no ulterior motive.</strong> What has been obscured is now fully lit from within and cannot be convincingly hidden any longer. The Sun does not ask permission to shine, nor does it apologize for the heat. This radiance is not borrowed — it belongs to you. Receive it completely, without the instinct to diminish it or qualify it into something more manageable.”},
{id:“major_20”,name:“Judgement”,          img:””,symbol:“☄”, keywords:[“rebirth”,“awakening”,“forgiveness”],meaning:“The call has gone out; the only remaining question is whether you will answer it. <strong>A second chance dressed as an obligation.</strong> Something in you — a version of yourself that has been waiting patiently through every false start — is being summoned to step fully and permanently into what you actually are. The past is not holding you back. It has been preparing you. Rise.”},
{id:“major_21”,name:“The World”,          img:””,symbol:“⊛”, keywords:[“completion”,“wholeness”,“integration”],meaning:”<strong>A cycle completes at the precise moment a larger one begins.</strong> This is not merely an arrival — it is a vantage point from which the entire journey becomes visible and, finally, comprehensible. Every detour, every apparent failure, every seemingly wasted effort reveals itself here as necessary. You have not just reached the destination. You have become someone capable of understanding why the path was exactly as it needed to be.”},

// ── WANDS (22–35) ────────────────────────────────────────
{id:“wands_01”,name:“Ace of Wands”,    img:””,symbol:“🔥”,keywords:[“new action”,“inspiration”,“spark”],meaning:“A spark arrives — raw, electric, and entirely without a plan. <strong>This is creative fire at its most primordial</strong>: pure impulse before doubt has had a chance to speak. The Ace of Wands does not ask whether the timing is right or whether you are ready. It simply ignites. Your task is not to contain this energy but to give it direction before it disperses. Something is beginning. Begin with it.”},
{id:“wands_02”,name:“2 of Wands”,    img:””,symbol:“🔥”,keywords:[“planning”,“decision”,“future”],meaning:“You have built something and now stand at the edge of it, looking toward what comes next. <strong>The world is wider than your current vantage point</strong>, and part of you already knows it. The Two of Wands is the pause between conception and commitment — the moment of genuine choice between the safety of what has been proven and the alive uncertainty of what is still possible. What horizon is calling you?”},
{id:“wands_03”,name:“3 of Wands”,  img:””,symbol:“🔥”,keywords:[“expansion”,“foresight”,“leadership”],meaning:“The ships are already on the water. <strong>What you set in motion is now moving under its own momentum</strong>, and the work shifts from initiation to watching with patient, expectant attention. This is the card of the long game — the vision that requires time, not just effort. Trust the direction you chose. Your reach is greater than you are currently allowing yourself to claim.”},
{id:“wands_04”,name:“4 of Wands”,   img:””,symbol:“🔥”,keywords:[“celebration”,“home”,“stability”],meaning:“A genuine moment of arrival — not the final destination, but a real threshold worth crossing with full presence. <strong>Something has been built, earned, and completed</strong>, and it deserves to be acknowledged as such before the next chapter begins. The Four of Wands invites celebration without irony or impatience. Gather the people who matter. Mark the moment.”},
{id:“wands_05”,name:“5 of Wands”,   img:””,symbol:“🔥”,keywords:[“conflict”,“competition”,“tension”],meaning:“Energy without clear direction produces friction. <strong>The conflict here is not necessarily destructive</strong> — competing ideas and clashing perspectives can sharpen thinking when engaged honestly rather than reactively. Examine what you are actually fighting for versus what you are fighting out of habit or ego. Not all resistance is opposition.”},
{id:“wands_06”,name:“6 of Wands”,    img:””,symbol:“🔥”,keywords:[“victory”,“recognition”,“progress”],meaning:“Recognition arrives — earned, visible, and real. <strong>This is the moment others see what you have been building</strong>, and their acknowledgement carries genuine weight. Accept it without deflection and without letting it become the primary measure of your worth. The Six of Wands reminds you that external validation, when it comes, is a signal — not a source.”},
{id:“wands_07”,name:“7 of Wands”,  img:””,symbol:“🔥”,keywords:[“defense”,“courage”,“standing ground”],meaning:“You have claimed a position worth defending, and now you must actually defend it. <strong>Hold your ground</strong> — not out of stubbornness, but from the clear-eyed certainty of someone who knows exactly what they stand for and why. The pressure coming from multiple directions is real, but so is your advantage. The discomfort of being challenged does not mean you are wrong; it often means you are right.”},
{id:“wands_08”,name:“8 of Wands”,  img:””,symbol:“🔥”,keywords:[“speed”,“action”,“communication”],meaning:“Everything accelerates. <strong>What has been building beneath the surface now moves with velocity</strong>, and the only useful response is to move with it rather than against it. Communications arrive, decisions demand quick thinking, and the pace of events compresses timelines you thought you had. This is not chaos — it is momentum. Stay clear on your direction so that the speed serves you.”},
{id:“wands_09”,name:“9 of Wands”,   img:””,symbol:“🔥”,keywords:[“resilience”,“persistence”,“last stand”],meaning:“Worn, watchful, but still standing. <strong>The weariness is real and does not need to be minimized</strong>; neither does the resilience that has kept you upright through every previous difficulty. The Nine of Wands honors the battle-tested quality of someone who has learned to defend what matters without becoming defensive about everything. Rest if you need to. But do not abandon the position you have paid so much to hold.”},
{id:“wands_10”,name:“10 of Wands”,    img:””,symbol:“🔥”,keywords:[“burden”,“responsibility”,“exhaustion”],meaning:“You have taken on more than was ever yours to carry, and the weight is now undeniable. <strong>The burden is real — but some of it is optional.</strong> The Ten of Wands asks for an honest accounting: what responsibilities are genuinely yours, what have you absorbed out of obligation or fear of disappointing others, and what can be put down without the world collapsing? Completion is near.”},
{id:“wands_11”,name:“Page of Wands”,   img:””,symbol:“🔥”,keywords:[“new energy”,“enthusiasm”,“exploration”],meaning:“Curiosity arrives fully charged and entirely unconditioned by previous failure. <strong>The Page of Wands does not yet know what is impossible</strong>, and that is precisely the gift. Fresh creative energy, a new idea, a direction that genuinely excites you — this is not naivety but the particular clarity that belongs to beginnings before caution crowds in. Follow the spark. Start before you feel ready.”},
{id:“wands_12”,name:“Knight of Wands”, img:””,symbol:“🔥”,keywords:[“passion”,“impulse”,“adventure”],meaning:“Brilliant velocity with a complicated relationship to consequences. <strong>The Knight of Wands moves fast and ignites everything in his path</strong> — including, occasionally, things that were not meant to burn. The energy here is genuinely magnetic and genuinely risky. Channel the boldness without abandoning the steering. Passion without direction is combustion; passion with even a small amount of aim covers remarkable ground.”},
{id:“wands_13”,name:“Queen of Wands”,  img:””,symbol:“🔥”,keywords:[“confidence”,“warmth”,“independence”],meaning:“Warm, magnetic, and completely at home in her own fire. <strong>The Queen of Wands does not seek permission to take up space</strong> — she fills it naturally, and others are drawn toward the heat of her presence rather than burned by it. She is the embodiment of creative confidence that has been tempered by experience into something both generous and grounded. Lead from genuine enthusiasm.”},
{id:“wands_14”,name:“King of Wands”,   img:””,symbol:“🔥”,keywords:[“vision”,“leadership”,“maturity”],meaning:“Vision at scale — the rare capacity to hold a large, living idea and move others toward it with both inspiration and strategic clarity. <strong>The King of Wands has learned to direct fire rather than simply release it.</strong> He sets the direction and trusts the burn. This is leadership born of genuine creative authority, not hierarchy. What larger vision are you being called to step into and own completely?”},

// ── CUPS (36–49) ─────────────────────────────────────────
{id:“cups_01”,name:“Ace of Cups”,    img:””,symbol:“🌊”,keywords:[“emotional opening”,“new love”,“intuition”],meaning:“An emotional beginning so fresh it has not yet been named. <strong>The heart opens — not cautiously, but completely</strong>, because the Ace of Cups does not negotiate the terms of its offering. Love, compassion, creativity born from deep feeling — whatever arrives through this card arrives with the quality of grace: unearned, unforced, and genuinely renewing. Receive what is being poured. Do not qualify it before it reaches you.”},
{id:“cups_02”,name:“2 of Cups”,    img:””,symbol:“🌊”,keywords:[“attraction”,“partnership”,“connection”],meaning:“Recognition between two — the moment of genuine meeting where something is seen and returned in kind. <strong>This is the card of true reciprocity</strong>: not transaction, not need meeting need, but the rarer encounter where two separate wholenesses come into honest contact. Whether this speaks to romance, partnership, or friendship, the quality is the same: authentic seeing, freely offered and freely received.”},
{id:“cups_03”,name:“3 of Cups”,  img:””,symbol:“🌊”,keywords:[“celebration”,“friendship”,“joy”],meaning:“Joy multiplied by sharing it. <strong>Celebration, friendship, and the particular warmth of belonging</strong> — not to a group that requires performance, but to the people who genuinely know you and choose to be present anyway. The Three of Cups honors the nourishment that comes from community, from laughter that needs no explanation, from the knowledge that the good things in your life are witnessed and celebrated by those you love.”},
{id:“cups_04”,name:“4 of Cups”,   img:””,symbol:“🌊”,keywords:[“apathy”,“contemplation”,“missed chance”],meaning:“Withdrawn into contemplation while the world continues to extend its offerings. <strong>There is something real in this introspection</strong> — a necessary turning inward, a genuine need to sit with what is rather than reach for what might be. But the Four of Cups also gently questions: is the withdrawal purposeful, or has it become a way of staying unavailable to things that might genuinely matter? The cup being offered is worth at least a second look.”},
{id:“cups_05”,name:“5 of Cups”,   img:””,symbol:“🌊”,keywords:[“grief”,“loss”,“regret”],meaning:“Grief is real here, and it does not need to be rushed. <strong>What has been lost deserves to be fully felt</strong> — not dramatized, not suppressed, but acknowledged with the honest weight it carries. And yet: the cups still standing behind you are also real, and there will come a moment when looking toward them is not a betrayal of what was lost but a continuation of what remains possible. Mourn completely. Then, when you are ready, turn.”},
{id:“cups_06”,name:“6 of Cups”,    img:””,symbol:“🌊”,keywords:[“nostalgia”,“memories”,“childhood”],meaning:“Innocence remembered — the sweetness of something that existed before complexity arrived. <strong>A figure from the past, a childhood feeling, a simpler version of yourself</strong> surfaces now, carrying either genuine comfort or a subtle invitation to examine what you are longing for. Nostalgia is information. The warmth it carries points toward something currently missing that can, with attention, be cultivated in the present rather than only mourned in retrospect.”},
{id:“cups_07”,name:“7 of Cups”,  img:””,symbol:“🌊”,keywords:[“illusion”,“choices”,“wishful thinking”],meaning:“An embarrassment of possibilities, none of them yet real. <strong>The imagination generates visions faster than discernment can evaluate them</strong>, and the danger is not a lack of options but the paralysis — or the magical thinking — that too many options can produce. Which of these visions is genuinely yours, and which are fantasies that feel better to imagine than to actually pursue? Choose one. Make it real.”},
{id:“cups_08”,name:“8 of Cups”,  img:””,symbol:“🌊”,keywords:[“walking away”,“seeking more”,“disappointment”],meaning:“Walking away from what no longer nourishes, even when it is still standing and still functional. <strong>This departure is not dramatic — it is quiet, deliberate, and necessary.</strong> Something that once held meaning has been drained of it, and continuing out of obligation or sunk-cost loyalty would cost you more than leaving. The Eight of Cups honors the courage it takes to stop investing in what is finished and turn, without fanfare, toward what might actually sustain you.”},
{id:“cups_09”,name:“9 of Cups”,   img:””,symbol:“🌊”,keywords:[“wish fulfillment”,“satisfaction”,“comfort”],meaning:“The wish card — a genuine sense of satisfaction, fulfilment, and the quiet pleasure of arriving somewhere you actually wanted to be. <strong>This contentment is real and is not a trap.</strong> Allow yourself to inhabit it without immediately scanning for what could go wrong or what remains undone. The Nine of Cups grants permission to feel good without qualification — to receive the good fortune of the present moment with gratitude rather than suspicion.”},
{id:“cups_10”,name:“10 of Cups”,    img:””,symbol:“🌊”,keywords:[“emotional fulfillment”,“family”,“happiness”],meaning:“Emotional completion — the deep, durable happiness that comes not from perfection but from genuine belonging and love that has been tested and has held. <strong>This is the fullness that the heart was always oriented toward</strong>, even in its most difficult passages. The Ten of Cups does not ask for more. It asks only that you be fully present for what is already here, because what is already here is what you were seeking all along.”},
{id:“cups_11”,name:“Page of Cups”,   img:””,symbol:“🌊”,keywords:[“creative message”,“gentleness”,“intuition”],meaning:“Feeling arrives unannounced and entirely without apology. <strong>The Page of Cups carries messages from the interior world</strong> — intuitions, dreams, creative stirrings, emotions that do not yet have precise names but that arrive with undeniable weight. Do not dismiss the strange, the tender, or the unexpected. Something worth paying attention to is surfacing from beneath the rational mind. Receive it with curiosity rather than analysis, at least initially.”},
{id:“cups_12”,name:“Knight of Cups”, img:””,symbol:“🌊”,keywords:[“romance”,“charm”,“invitation”],meaning:“The romantic idealist in motion — arriving with feeling, beauty, and the kind of sincerity that makes people want to believe every word. <strong>The Knight of Cups is genuinely moved by what he pursues</strong>, and his emotional fluency is real. But he follows feeling over strategy, and the heart, however beautifully attuned, is not always a reliable compass for long-term navigation. Allow the passion. Apply a small amount of scrutiny before the horse gallops past the point of return.”},
{id:“cups_13”,name:“Queen of Cups”,  img:””,symbol:“🌊”,keywords:[“compassion”,“healing”,“emotional safety”],meaning:“Emotional intelligence carried to its most refined expression — the capacity to feel everything fully without being swept away by any of it. <strong>The Queen of Cups holds the emotional world with remarkable steadiness</strong>: present, perceptive, genuinely compassionate, and internally anchored in a way that makes her safety for others without making her a vessel for their unprocessed feeling. She knows the difference between empathy and absorption, and that distinction is a form of wisdom.”},
{id:“cups_14”,name:“King of Cups”,   img:””,symbol:“🌊”,keywords:[“emotional control”,“calm”,“diplomacy”],meaning:“Mastery over the emotional depths — not control in the sense of suppression, but the mature authority of someone who has descended into their own feeling and come back knowing. <strong>The King of Cups leads with wisdom, not detachment.</strong> He creates emotional safety for those around him precisely because he has done the interior work that makes him trustworthy when it matters. Respond rather than react. Lead from the depth of what you actually understand.”},

// ── SWORDS (50–63) ───────────────────────────────────────
{id:“swords_01”,name:“Ace of Swords”,    img:””,symbol:“⚔”,keywords:[“clarity”,“breakthrough”,“truth”],meaning:“Truth arrives with the force of a clean cut — <strong>no ambiguity, no softening, just the precise clarity that changes everything it touches.</strong> The Ace of Swords is the breakthrough thought, the decision that cannot be unmade, the moment of seeing something so clearly that pretending otherwise becomes impossible. It can be uncomfortable and it is rarely convenient, but this kind of clarity is ultimately a gift. Use it with precision. Truth without compassion is just a blade.”},
{id:“swords_02”,name:“2 of Swords”,    img:””,symbol:“⚔”,keywords:[“stalemate”,“avoidance”,“difficult choice”],meaning:“A deliberate blindfold. <strong>You know more than you are currently willing to look at directly</strong>, and the crossed swords hold a tension that cannot be sustained indefinitely. The Two of Swords is not indecision but avoidance — the mind protecting itself from a choice it already, on some level, understands. The longer you balance in this position, the heavier it becomes. What would you see, if you removed the blindfold and looked at the situation plainly?”},
{id:“swords_03”,name:“3 of Swords”,  img:””,symbol:“⚔”,keywords:[“heartbreak”,“grief”,“betrayal”],meaning:“Pain acknowledged rather than managed is pain that can actually move. <strong>Something has cut through to the centre</strong> — betrayal, grief, disappointment, or the simple cruelty of a truth that arrived without kindness. The Three of Swords does not offer a shortcut through this. It offers only the honest recognition that what hurts, hurts for a reason, and that the heart is capable of processing what the mind would prefer to reroute around.”},
{id:“swords_04”,name:“4 of Swords”,   img:””,symbol:“⚔”,keywords:[“rest”,“recovery”,“retreat”],meaning:“The mind, like the body, requires rest to integrate what it has endured. <strong>This is not avoidance — it is necessary withdrawal</strong> after a period of sustained mental effort, conflict, or strain. The Four of Swords calls for deliberate stillness: not as retreat from the battle, but as the recuperation that makes it possible to re-enter it with clarity rather than exhaustion. The swords are laid down. The war is not over. But this pause is not a defeat; it is a strategy.”},
{id:“swords_05”,name:“5 of Swords”,   img:””,symbol:“⚔”,keywords:[“conflict”,“bullying”,“win at all costs”],meaning:“A victory that leaves a hollow feeling behind it — or a defeat that lingers long after the field has emptied. <strong>The Five of Swords asks what the conflict actually cost</strong> relative to what it won. When winning requires compromising your integrity, or when the battle damages something that mattered more than the outcome, the victory is not what it appeared to be. Choose your conflicts with more care than you choose your arguments.”},
{id:“swords_06”,name:“6 of Swords”,    img:””,symbol:“⚔”,keywords:[“transition”,“moving on”,“healing”],meaning:“Moving through troubled water toward calmer ground — not without difficulty, but with direction. <strong>The transition is real and the leaving is real</strong>, even if what is being left still weighs on you. The Six of Swords is not dramatic departure but the quiet, necessary movement away from what has become untenable. The swords in the boat are still present; the past travels with you. But the shore ahead is more stable than the one behind. Keep moving.”},
{id:“swords_07”,name:“7 of Swords”,  img:””,symbol:“⚔”,keywords:[“deception”,“strategy”,“acting alone”],meaning:“Something is being done indirectly that could, and perhaps should, be done plainly. <strong>The Seven of Swords marks the presence of strategy shading into avoidance</strong> — or cleverness becoming a substitute for courage. Whether this speaks to your own deflections or to the actions of someone around you, the question is the same: what would happen if this were handled directly, honestly, and in full light?”},
{id:“swords_08”,name:“8 of Swords”,  img:””,symbol:“⚔”,keywords:[“self-imposed limits”,“trapped”,“victim mindset”],meaning:“The prison is largely constructed of perception, and the chains are not as tight as they feel from the inside. <strong>What confines you here is not the external circumstance but the belief that the circumstance is permanent</strong>, immovable, and entirely outside your influence. The Eight of Swords invites one small act of clarity: remove the blindfold. Just look. The path out of this situation has been there the entire time.”},
{id:“swords_09”,name:“9 of Swords”,   img:””,symbol:“⚔”,keywords:[“anxiety”,“nightmare”,“worry”],meaning:“The mind in its most relentless mode — cycling through catastrophe at three in the morning when the body is exhausted and perspective has temporarily evacuated. <strong>The suffering here is real, but it is being amplified by exhaustion and isolation.</strong> The Nine of Swords asks: how much of what is tormenting you is actually happening, and how much is the mind’s worst-case interpretation of a situation that is, in daylight, more navigable than it appears at this hour?”},
{id:“swords_10”,name:“10 of Swords”,    img:””,symbol:“⚔”,keywords:[“absolute end”,“rock bottom”,“betrayal”],meaning:“An ending so complete it removes all ambiguity about whether it is actually finished. <strong>This is the bottom of a cycle, unmistakable and undeniable</strong> — and that certainty, however painful, is actually a form of mercy. You cannot fall further from here. The only direction available is forward. What is done is done, and the grief of that is real. But the Ten of Swords also marks the first moment when recovery becomes genuinely possible, because there is nothing left to lose.”},
{id:“swords_11”,name:“Page of Swords”,   img:””,symbol:“⚔”,keywords:[“alertness”,“curiosity”,“new ideas”],meaning:“A quick, curious mind that arrives with questions before it has fully thought through the implications of the answers. <strong>The Page of Swords is sharp, perceptive, and slightly impatient</strong> — brilliant in the gathering of information, still developing in the art of knowing when to speak it. New ideas surface with the force of revelation here. Pursue the truth rigorously. Learn to distinguish between the thrill of knowing and the wisdom of understanding what to do with what you know.”},
{id:“swords_12”,name:“Knight of Swords”, img:””,symbol:“⚔”,keywords:[“directness”,“impulsiveness”,“debate”],meaning:“Pure intellectual velocity — the mind outrunning the body, the decision outpacing the consideration, the conviction charging forward faster than nuance can keep up. <strong>The Knight of Swords is formidably effective in a crisis</strong>, cutting through noise and confusion with single-minded clarity. In a calmer context, that same directness can become bluntness, and that same speed can become the source of the next crisis. Think fast. Speak after.”},
{id:“swords_13”,name:“Queen of Swords”,  img:””,symbol:“⚔”,keywords:[“clear-eyed discernment”,“honesty”,“independence”],meaning:“She has seen enough to stop pretending, and the clarity she offers — however bracing — comes from a place of hard-won wisdom rather than cruelty. <strong>The Queen of Swords cuts through pretence with surgical precision</strong>, not because she enjoys the blade but because she has learned that kindness built on dishonesty is its own form of harm. Trust her perceptions. Apply her standards to your own thinking.”},
{id:“swords_14”,name:“King of Swords”,   img:””,symbol:“⚔”,keywords:[“logic”,“authority”,“discipline”],meaning:“The highest expression of the intellect: clarity without cruelty, authority without rigidity, and the rare capacity to apply principle consistently regardless of personal cost. <strong>The King of Swords has earned his authority through honest thinking over a long period</strong>, and his word carries weight precisely because it has never been for sale. Think clearly. Decide fairly. Hold the standard you know to be correct, even when it would be considerably easier not to.”},

// ── PENTACLES (64–77) ────────────────────────────────────
{id:“penta_01”,name:“Ace of Pentacles”,    img:””,symbol:“✦”,keywords:[“new financial start”,“opportunity”,“prosperity”],meaning:“A new material beginning — an opportunity that arrives with genuine substance, not merely promise. <strong>The seed being offered here is real</strong>, and real seeds respond to real conditions: good soil, patient tending, and time. The Ace of Pentacles is not a windfall but an invitation — to plant something worth growing, to begin building with solid materials, to treat this opportunity with the seriousness that its potential deserves. Receive it with both hands.”},
{id:“penta_02”,name:“2 of Pentacles”,    img:””,symbol:“✦”,keywords:[“balance”,“flexibility”,“juggling”],meaning:“The ongoing performance of keeping multiple things in motion simultaneously — and doing it, for now, with more grace than the difficulty suggests. <strong>Balance here is not a fixed state but an active, continuous adjustment.</strong> The Two of Pentacles honors the genuine skill required to manage competing demands without dropping what matters most. Ask: is the juggling itself sustainable, or is it time to put one thing down in order to hold another more securely?”},
{id:“penta_03”,name:“3 of Pentacles”,  img:””,symbol:“✦”,keywords:[“teamwork”,“skill”,“quality”],meaning:“Skill meets collaboration and something genuinely better than either could produce alone emerges. <strong>This is the card of craft in its most honest form</strong>: the willingness to learn from those who know more, to contribute what you actually do well, and to trust that the whole being built together is worth the ego it requires you to set aside. Excellence here is not solo performance. It is the harder, more durable achievement of building something with others.”},
{id:“penta_04”,name:“4 of Pentacles”,   img:””,symbol:“✦”,keywords:[“hoarding”,“control”,“security”],meaning:“Security, held tightly enough to become its own form of poverty. <strong>There is wisdom in protecting what you have earned</strong> — and there is a point where protection calcifies into hoarding and caution becomes the thing that prevents growth. The Four of Pentacles asks what you are clinging to and what the clinging is actually costing you. Resources — including energy, trust, and time — need to move in order to grow.”},
{id:“penta_05”,name:“5 of Pentacles”,   img:””,symbol:“✦”,keywords:[“poverty”,“isolation”,“insecurity”],meaning:“The cold that comes not just from circumstance but from the feeling of being excluded from warmth that others seem to inhabit easily. <strong>Material hardship is real here, and so is the interior sense of lack</strong> that often accompanies it. The Five of Pentacles asks: are you walking past the open door because you do not believe it is meant for you? Scarcity is sometimes a fact. It is also, at times, a lens that makes available resources invisible.”},
{id:“penta_06”,name:“6 of Pentacles”,    img:””,symbol:“✦”,keywords:[“giving”,“receiving”,“generosity”],meaning:“The flow of resources — given, received, and the complex power dynamics that attend both. <strong>Generosity is honoured here, and so is its shadow</strong>: the giving that creates dependency, the receiving that comes at a cost to dignity, the scales that are never quite level. The Six of Pentacles invites a clear-eyed examination of the exchanges in your life. Are the terms of this exchange actually equitable, or have you simply stopped examining them?”},
{id:“penta_07”,name:“7 of Pentacles”,  img:””,symbol:“✦”,keywords:[“pause and assess”,“waiting”,“reflection”],meaning:“The long pause in the middle of a long effort — the moment of stepping back from the work to assess honestly whether the investment is returning what you expected. <strong>Patience is required here, but it is not passive.</strong> The Seven of Pentacles is the card of intelligent evaluation at the midpoint: not giving up prematurely, not continuing blindly. What does the growth actually look like, and what does it tell you about whether the strategy needs to change?”},
{id:“penta_08”,name:“8 of Pentacles”,  img:””,symbol:“✦”,keywords:[“apprenticeship”,“focus”,“skill building”],meaning:“The satisfaction of doing the work for its own sake — head down, hands engaged, the mind quieted into the particular peace that comes from genuine absorption in craft. <strong>Mastery is built here, in repetition, in the willingness to do the same thing slightly better each time</strong>, in the refusal to cut corners even when no one is watching. The Eight of Pentacles is not glamorous, and it does not ask to be. It asks only for your full and patient attention to the work directly in front of you.”},
{id:“penta_09”,name:“9 of Pentacles”,   img:””,symbol:“✦”,keywords:[“self-sufficiency”,“luxury”,“discipline”],meaning:“Self-sufficiency achieved through effort and sustained through discipline — the particular satisfaction of standing in abundance that you yourself cultivated. <strong>This is not luck. This is the harvest of sustained, intelligent effort</strong>, and it belongs entirely to you. The Nine of Pentacles invites enjoyment without guilt: the fine things, the earned ease, the pleasure of an environment shaped by your own taste and tended by your own hands. Inhabit what you have built. You are allowed.”},
{id:“penta_10”,name:“10 of Pentacles”,    img:””,symbol:“✦”,keywords:[“wealth”,“legacy”,“family stability”],meaning:“Wealth in its most complete expression — not just material security, but the durability of something built well enough to outlast the builder. <strong>Legacy, rootedness, the abundance that flows through generations rather than pooling in a single lifetime.</strong> The Ten of Pentacles asks what you are building that will matter beyond your own satisfaction, and what it means to create something that holds and nourishes not just you, but the people and causes you love most. This is the deepest kind of success.”},
{id:“penta_11”,name:“Page of Pentacles”,   img:””,symbol:“✦”,keywords:[“new skill”,“study”,“ambition”],meaning:“Earnest, grounded, and entirely serious about learning — the Page of Pentacles brings the beginner’s willingness to study the real world with honest attention and long patience. <strong>A new practical opportunity is being examined with genuine care</strong>; this is not impulsive enthusiasm but the quieter, more durable interest of someone who intends to follow through. Approach the material world — the body, the finances, the project, the craft — with this quality of curious, unhurried attention.”},
{id:“penta_12”,name:“Knight of Pentacles”, img:””,symbol:“✦”,keywords:[“efficiency”,“hard work”,“responsibility”],meaning:“Methodical, reliable, and entirely unwilling to be rushed past the point of quality. <strong>The Knight of Pentacles moves slowly by design</strong>, not from a lack of energy but from a profound respect for the difference between done and done well. What he undertakes, he finishes. What he commits to, he honours. This energy is the antidote to every half-completed effort: steady application, no shortcuts, the deep satisfaction of work that will hold up under inspection.”},
{id:“penta_13”,name:“Queen of Pentacles”,  img:””,symbol:“✦”,keywords:[“nurturing”,“practicality”,“comfort”],meaning:“Practical wisdom made warm — the rare capacity to manage the material world with efficiency and generosity simultaneously. <strong>The Queen of Pentacles creates abundance not by hoarding it but by circulating it</strong>: through her household, her relationships, her work, her community. She is grounded in the body, honest about needs, and skilled at meeting them without drama. Tend what is in your care — the practical, the physical, the people — with this quality of attentive, nourishing competence.”},
{id:“penta_14”,name:“King of Pentacles”,   img:””,symbol:“✦”,keywords:[“wealth”,“business mind”,“security”],meaning:“The full expression of material mastery — not wealth for its own sake, but the commanding authority of someone who has built something real, managed it wisely, and learned to steward resources in a way that creates stability for everyone within his sphere. <strong>The King of Pentacles does not perform success; he simply embodies it</strong>, with the unhurried confidence of someone who has nothing left to prove. Lead with generosity. Build with patience. Protect what matters with steady, unshakeable commitment.”}
];

/* ============================================================
POSITION METADATA — Celtic Cross Framework
─────────────────────────────────────────────────────────
template: controls the sentence structure in the reading.
Placeholders:
{card} → card name
{k0}   → keywords[0]
{k1}   → keywords[1]
{k2}   → keywords[2]

TO CUSTOMISE the reading voice: rewrite the templates below.
Each template becomes one sentence in the reading paragraph.
============================================================ */
const POSITIONS = [
{num:1,  label:“The Present”,      context:“This card reflects your current situation”,
template:“At the heart of the present, <em>{card}</em> speaks of <strong>{k0}</strong> — {k1} alive at the centre of where you stand right now.”},
{num:2,  label:“The Challenge”,    context:“This card represents the crossing influence or challenge”,
template:“Crossing this is <em>{card}</em>, bringing the energy of <strong>{k0}</strong> — a force that both complicates and clarifies what you are working through.”},
{num:3,  label:“The Crown”,        context:“This card shows what crowns your situation — a conscious goal or ideal”,
template:“Above, <em>{card}</em> crowns the spread with <strong>{k0}</strong> — the highest aspiration or conscious ideal currently shaping your direction.”},
{num:4,  label:“The Root”,         context:“This card reveals the foundation — past events or subconscious forces”,
template:“Beneath it all, <em>{card}</em> forms the root through <strong>{k0}</strong> — a foundation laid in the past that continues to quietly inform everything above it.”},
{num:5,  label:“The Past”,         context:“This card speaks to what is passing away or receding”,
template:“Moving behind you is <em>{card}</em> — <strong>{k0}</strong> in the process of releasing its hold, making room for what is coming.”},
{num:6,  label:“The Future”,       context:“This card points toward the near future — what is approaching”,
template:“Moving toward you, <em>{card}</em> brings <strong>{k0}</strong> — an energy already forming just beyond the edge of the present moment.”},
{num:7,  label:“Your Self”,        context:“This card mirrors how you currently see yourself, or your attitude”,
template:“You enter this situation carrying <em>{card}</em> — the quality of <strong>{k0}</strong>, the inner posture with which you are currently meeting what arises.”},
{num:8,  label:“Your Environment”, context:“This card reflects the energy and people surrounding you”,
template:“The world around you is coloured by <em>{card}</em> — <strong>{k0}</strong> present in the people and energies that constitute your immediate environment.”},
{num:9,  label:“Hopes & Fears”,    context:“This card touches the deepest hopes — and the deepest fears — within you”,
template:“In the territory of deepest hope and deepest fear, <em>{card}</em> surfaces with <strong>{k0}</strong> — the edge where what you most want and most dread share the same face.”},
{num:10, label:“The Outcome”,      context:“This card reveals the potential culmination of current forces”,
template:“Should these threads continue, <em>{card}</em> points toward <strong>{k0}</strong> as the potential outcome — the direction in which the current forces, if left to themselves, are already moving.”}
];

/* ============================================================
READING OPENING & CLOSING
Rewrite these to control the overall voice of the reading.
============================================================ */
const OPEN  = “The cards have been laid. Ten voices speak at once — listen for the thread that runs between them. “;
const CLOSE = “ Sit with what resonates. The reading is not a map of what must be — it is a mirror of what is, offered so that you may choose more clearly what comes next.”;

/* ============================================================
STATE
============================================================ */
let shuffledDeck  = []; // 0–77 indices in shuffled order
let selectedSlots = []; // up to 10 fan-slot indices chosen by user
let assignedCards = []; // 10 DB entries in position order
const TOTAL = 10;

/* ============================================================
INIT
============================================================ */

/* ============================================================
PHASE 1 — SHUFFLE BUTTON
============================================================ */
function doShuffle() {
const btn  = document.getElementById(‘shuffleBtn’);
const pile = document.getElementById(‘deckPile’);
btn.disabled = true;
pile.classList.add(‘shuffling’);

// Fisher-Yates shuffle of indices 0..77
shuffledDeck = Array.from({length:78}, (_,i) => i);
for (let i = 77; i > 0; i–) {
const j = Math.floor(Math.random() * (i + 1));
[shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
}

setTimeout(() => {
pile.classList.remove(‘shuffling’);
goPhase(‘fan’);
buildFan();
}, 720);
}

/* ============================================================
PHASE 2 — RIBBON FAN
All 78 cards spread across the viewport in a single arc row.
No scrolling — cards stack/overlap like a poker ribbon.
============================================================ */
function buildFan() {
buildPips();

const stage  = document.getElementById(‘fanStage’);
stage.innerHTML = ‘’;

// Measure available space after next paint
requestAnimationFrame(() => {
const stageW = stage.clientWidth;
const stageH = stage.clientHeight;

```
// Card dimensions — tall enough to be satisfying, short enough to breathe
const cardH = Math.min(Math.floor(stageH * 0.68), 120);
const cardW = Math.round(cardH * 0.64);

const N = 78;
const totalArc   = 22;           // total rotation spread across all cards (degrees)
const startAngle = -totalArc / 2;
const angleStep  = totalArc / (N - 1);

// X positions: cards span full stage width
const usableW = stageW - cardW;
const xStep   = usableW / (N - 1);

// Arc dip: middle cards sit a bit lower, creating the ribbon curve
const baseY   = Math.round(stageH * 0.52 - cardH * 0.5);
const arcDip  = stageH * 0.07;

for (let i = 0; i < N; i++) {
  const angle = startAngle + angleStep * i;
  const x     = Math.round(i * xStep);
  // Sine curve: 0 at edges, 1 at centre → dips down at centre
  const arcY  = Math.sin((i / (N - 1)) * Math.PI) * arcDip;
  const y     = Math.round(baseY + arcY);

  const el = document.createElement('div');
  el.className    = 'fan-card';
  el.id           = `fc-${i}`;
  el.dataset.slot = i;
  el.style.cssText =
    `width:${cardW}px;height:${cardH}px;` +
    `left:${x}px;top:${y}px;` +
    `transform:rotate(${angle}deg);` +
    `z-index:${i};`;

  el.innerHTML =
    `<div class="fan-card-face">` +
      `<span class="fan-card-num">${i + 1}</span>` +
      `<span class="fan-card-glyph">✦</span>` +
    `</div>`;

  // Mouse hover lift — desktop only
  el.addEventListener('mouseenter', () => {
    if (el.classList.contains('drawn')) return;
    el.style.transform = `rotate(${angle}deg) translateY(-20px)`;
    el.style.zIndex    = 200;
  });
  el.addEventListener('mouseleave', () => {
    if (el.classList.contains('drawn')) return;
    el.style.transform = `rotate(${angle}deg)`;
    el.style.zIndex    = String(i);
  });

  // Touch: go straight to click — no touchstart/touchend visual bounce.
  // Lifting a card temporarily to z-index:200 on touchstart then
  // dropping it on touchend causes right-side cards to flash as they
  // are briefly covered and uncovered before the click fires.
  el.addEventListener('click', () => onFanClick(i));
  stage.appendChild(el);
}

// Attach gesture system to the stage with card position data
const cardData = Array.from(stage.querySelectorAll('.fan-card'))
  .map(el => ({
    slot:  parseInt(el.dataset.slot),
    el:    el,
  }));
attachFanGestures(stage, cardData);

// Add hold-ring SVG and burst div to each card
stage.querySelectorAll('.fan-card').forEach(el => {
  // Hold progress ring (SVG circle stroke-dashoffset animation)
  const ring = document.createElementNS('http://www.w3.org/2000/svg','svg');
  ring.setAttribute('class','hold-ring');
  ring.setAttribute('viewBox','0 0 36 36');
  ring.innerHTML =
    `<circle cx="18" cy="18" r="14" fill="none" stroke="rgba(212,114,42,.25)" stroke-width="2"/>` +
    `<circle cx="18" cy="18" r="14" fill="none" stroke="var(--accent-orange)" stroke-width="2.5"` +
    ` stroke-dasharray="88" stroke-dashoffset="88" stroke-linecap="round"` +
    ` style="transform:rotate(-90deg);transform-origin:50% 50%;` +
    `transition:stroke-dashoffset ${HOLD_MS}ms linear;"` +
    ` class="hold-progress"/>`;
  el.appendChild(ring);

  // Burst div
  const burst = document.createElement('div');
  burst.className = 'select-burst';
  el.appendChild(burst);
});

// Animate hold-ring on 'holding' class toggle
const holdObserver = new MutationObserver(mutations => {
  mutations.forEach(m => {
    if (m.attributeName !== 'class') return;
    const el = m.target;
    const prog = el.querySelector('.hold-progress');
    if (!prog) return;
    if (el.classList.contains('holding')) {
      // Animate to full circle
      requestAnimationFrame(() => prog.style.strokeDashoffset = '0');
    } else {
      // Reset instantly
      prog.style.transition = 'none';
      prog.style.strokeDashoffset = '88';
      requestAnimationFrame(() => {
        prog.style.transition = `stroke-dashoffset ${HOLD_MS}ms linear`;
      });
    }
  });
});
stage.querySelectorAll('.fan-card').forEach(el =>
  holdObserver.observe(el, {attributes: true})
);
```

});
}

function buildPips() {
const c = document.getElementById(‘drawPips’);
c.innerHTML = ‘’;
for (let i = 0; i < TOTAL; i++) {
const p = document.createElement(‘div’);
p.className = ‘draw-pip’;
p.id = `pip-${i}`;
c.appendChild(p);
}
}

function onFanClick(slot) {
if (selectedSlots.includes(slot)) return;
if (selectedSlots.length >= TOTAL) return;

selectedSlots.push(slot);

// Brief ‘tapped’ class for visual feedback, then swap to ‘drawn’
// Using a class avoids any inline z-index change that would cause
// neighbouring cards to flash as they are uncovered
const cardEl = document.getElementById(`fc-${slot}`);
cardEl.classList.add(‘tapped’);
setTimeout(() => {
cardEl.classList.remove(‘tapped’);
cardEl.classList.add(‘drawn’);
}, 180);

document.getElementById(`pip-${selectedSlots.length - 1}`).classList.add(‘filled’);

const n = selectedSlots.length;
document.getElementById(‘drawCount’).textContent = `${n} / ${TOTAL}`;
if (n === TOTAL) {
document.getElementById(‘drawPill’).classList.add(‘complete’);
setTimeout(buildSpread, 600);
}
}

/* ============================================================
PHASE 3 — CELTIC CROSS + READING PARAGRAPH
============================================================ */
function buildSpread() {
// Map 10 selected fan slots → their actual DB cards
assignedCards = selectedSlots.map(slot => DB[shuffledDeck[slot]]);

// Allow page to scroll for the spread view
document.body.classList.add(‘scrollable’);
buildCross();
buildParagraph();
goPhase(‘spread’);
window.scrollTo({top: 0, behavior: ‘instant’});
}

/* – Celtic Cross grid – */
function buildCross() {
const cross = document.getElementById(‘celticCross’);
cross.innerHTML = ‘’;

// Responsive card sizes
const vw  = window.innerWidth;
const ccW = vw < 400 ? 48 : vw < 680 ? 62 : 88;
const ccH = Math.round(ccW * 1.4);
cross.style.setProperty(’–ccw’, ccW + ‘px’);
cross.style.setProperty(’–cch’, ccH + ‘px’);

// Layout: [posIdx, gridCol, gridRow, isRotated]
const layout = [
[0, 3, 3, false], // Present (centre, in wrapper)
[1, 3, 3, true],  // Challenge (rotated, in wrapper)
[2, 3, 2, false], // Crown
[3, 3, 4, false], // Root
[4, 2, 3, false], // Past
[5, 4, 3, false], // Future
[6, 6, 5, false], // Self
[7, 6, 4, false], // Environment
[8, 6, 3, false], // Hopes/Fears
[9, 6, 2, false], // Outcome
];

// Shared wrapper for positions 1 and 2 (overlapping)
const wrap = document.createElement(‘div’);
wrap.className = ‘cc-center’;

layout.forEach(([pi, col, row, rotated]) => {
const card = assignedCards[pi];
const pos  = POSITIONS[pi];
const el   = document.createElement(‘div’);
el.className = ‘cc-card’ + (rotated ? ’ rotated’ : ‘’);
el.id = `cc-${pi}`;

```
// Image if provided, symbol otherwise
const isPenta = card.id.startsWith('penta_');
const symClass = 'cc-art-sym' + (isPenta ? ' sym-gold' : '');
const artInner = card.img
  ? `<img src="${card.img}" alt="${card.name}" loading="lazy" />`
  : `<span class="${symClass}">${card.symbol}</span>`;

el.innerHTML =
  `<div class="cc-inner">` +
    `<div class="cc-back"><span class="cc-pos-label">${pos.label}</span></div>` +
    `<div class="cc-front">` +
      `<div class="cc-art">${artInner}</div>` +
      `<div class="cc-name">${card.name}</div>` +
    `</div>` +
  `</div>`;

el.addEventListener('click', () => openModal(pi));

if (pi === 0 || pi === 1) {
  wrap.appendChild(el);
} else {
  el.classList.add(`cc-pos-${pos.num}`);
  cross.appendChild(el);
}
```

});

cross.appendChild(wrap);

// Reveal all cards face-up with a staggered entrance
const allCards = cross.querySelectorAll(’.cc-card’);
allCards.forEach((c, i) => {
c.style.opacity    = ‘0’;
c.style.transition = ‘none’;
setTimeout(() => {
c.style.transition = ‘opacity .35s ease’;
c.style.opacity    = ‘1’;
// Flip face-up shortly after it becomes visible
setTimeout(() => c.classList.add(‘face-up’), 60);
}, 100 + i * 85);
});
}

/* ============================================================
CATEGORY SELECTION
============================================================ */
let selectedCategory = ‘general’; // default

function selectCategory(cat) {
selectedCategory = cat;
document.querySelectorAll(’.cat-btn’).forEach(b => b.classList.remove(‘selected’));
document.getElementById(‘cat-’ + cat).classList.add(‘selected’);
}

// ── Single init on load ──────────────────────────────────────

/* ============================================================
READING ENGINE — local template-based, category-aware
─────────────────────────────────────────────────────────
Each category has its own:
- Opening sentence
- Position lens (how each position is framed for that category)
- Bullet focus text
The user’s intention text is woven into the overview if present.
============================================================ */

// Opening and closing lines — kept minimal per format spec
const CAT_OPEN = {
general: ’Ten cards are placed. ’,
love:    ’Ten cards are placed. ’,
wealth:  ’Ten cards are placed. ’
};
const CAT_CLOSE = {
general: ‘’,
love:    ‘’,
wealth:  ‘’
};

// Per-category section bullets — format spec:
// Section headers 【】, direct “you” sentences, • verb bullet advice.
// No metaphors. No “energy”, “quality”, “the cards suggest”, “speaks of”.
function buildBullets(cards, intention, category) {
const b  = (i) => `<strong>${cards[i].name}</strong>`;
const k  = (i) => `<em>${cards[i].keywords[0]}</em>`;
const k1 = (i) => `<em>${cards[i].keywords[1]}</em>`;
const n  = (i) => cards[i].name;
const kw = (i) => cards[i].keywords[0];
const kw1= (i) => cards[i].keywords[1];

// ── GENERAL ───────────────────────────────────────────────────
if (category === ‘general’) {
// Suit-based advice verb for present card
const presentSuit = cards[0].id.split(’*’)[0];
const challengeSuit = cards[1].id.split(’*’)[0];
const outcomeSuit = cards[9].id.split(’_’)[0];

```
const situationText =
  `You are in a moment defined by ${k(0)}. `+
  `${b(0)} is at the center, and ${b(1)} is what is blocking you — ${k(1)}. `+
  `${b(3)} at the root shows your base is ${k(3)}.`;

const wealthText =
  `${b(3)} is your material foundation — ${k(3)} is the ground you are on. `+
  `${b(2)} above is what you are aiming for — ${k(2)}. `+
  `${b(1)} is the obstacle between you and that goal — ${k(1)}.`;

const loveText =
  `${b(6)} shows you are bringing ${k(6)} into your relationships. `+
  `${b(5)} is what is coming — ${k(5)} will affect your connections.`;

const adviceText =
  `• Stop ignoring ${b(1)} — ${k(1)} is the real issue<br>`+
  `• Face what ${b(0)} is showing you about where you are<br>`+
  `• Let ${b(4)} go — it is already behind you<br>`+
  `• Act toward ${k(5)}, which ${b(5)} is bringing<br>`+
  `• Your outcome is ${k(9)} — ${b(9)} shows where this is going`;

return [
  { icon:'◈', label:'【Current Situation】', text: situationText },
  { icon:'🪙', label:'【Wealth】',            text: wealthText },
  { icon:'◇', label:'【Love】',              text: loveText },
  { icon:'☽', label:'【Advice】',            text: adviceText },
];
```

}

// ── LOVE ──────────────────────────────────────────────────────
if (category === ‘love’) {
const selfSuit = cards[6].id.split(’_’)[0];
const charMap = {
major:  ‘You process deeply before acting. You need meaning in relationships, not just comfort.’,
wands:  ‘You are passionate and direct in love. You pursue. You also burn out fast.’,
cups:   ‘You feel everything. You give a lot. You are also easily hurt.’,
swords: ‘You need honesty above all. You cut through pretense. You struggle with softness.’,
penta:  ‘You show love through action and reliability. You are not good at saying it directly.’
};
const char = charMap[selfSuit] || ‘Your approach to love is complex and does not fit a simple pattern.’;

```
const situationText =
  `You are dealing with ${k(0)} in your relationships right now. `+
  `${b(0)} is at the center. ${b(1)} is what is in the way — ${k(1)}.`;

const loveDetailText =
  `${b(6)} in the self position: ${char} `+
  `${b(7)} in your environment means the people around you are bringing ${k(7)}. `+
  `${b(8)} shows what you both want and fear — ${k(8)}.`;

const adviceText =
  `• Stop performing — ${b(6)} shows what you are actually bringing<br>`+
  `• Face the obstacle ${b(1)} represents — ${k(1)} will not disappear<br>`+
  `• Let ${b(4)} be over — it already is<br>`+
  `• Act toward what ${b(5)} is bringing — ${k(5)}<br>`+
  `• Your outcome is ${k(9)} — that is where this is heading`;

return [
  { icon:'◇', label:'【Current Situation】', text: situationText },
  { icon:'☽', label:'【Love】',              text: loveDetailText },
  { icon:'✦', label:'【Advice】',            text: adviceText },
];
```

}

// ── WEALTH ────────────────────────────────────────────────────
if (category === ‘wealth’) {
const crownSuit = cards[2].id.split(’*’)[0];
const rootSuit  = cards[3].id.split(’*’)[0];

```
const careerMap = {
  major:  'Leadership, advising, education, or work where your influence changes outcomes.',
  wands:  'Entrepreneurship, creative work, media, or brand building.',
  cups:   'Healthcare, therapy, education, hospitality, or service.',
  swords: 'Law, technology, research, writing, or analysis.',
  penta:  'Finance, real estate, construction, manufacturing, or craft.'
};
const bizMap = {
  major:  'Coaching, personal development, wellness, or spiritual services.',
  wands:  'Startups, digital media, events, or creative agencies.',
  cups:   'Health, education, or community platforms.',
  swords: 'Consulting, SaaS, legal services, or information products.',
  penta:  'Property, manufacturing, or food and beverage.'
};

const situationText =
  `You are dealing with ${k(0)} in your finances right now. `+
  `${b(0)} is at the center. ${b(1)} is blocking you — ${k(1)}. `+
  `${b(3)} is your base — ${k(3)}.`;

const wealthDetailText =
  `${b(2)} is what you are working toward — ${k(2)}. `+
  `${b(5)} is what is coming next — ${k(5)}. `+
  `${b(9)} is your outcome — ${k(9)}.`;

const careerText =
  `Career direction: ${careerMap[crownSuit] || 'Fields where your skills create direct value.'} `+
  `Business direction: ${bizMap[rootSuit] || 'Sectors where you build something real and lasting.'}`;

const adviceText =
  `• Stop avoiding ${b(1)} — ${k(1)} is the real block<br>`+
  `• Face your foundation — ${b(3)} shows what you are actually standing on<br>`+
  `• Let ${b(4)} go — that approach has run its course<br>`+
  `• Act toward ${k(2)}, which ${b(2)} is pointing at<br>`+
  `• Your outcome is ${k(9)} if you stay on track`;

return [
  { icon:'🪙', label:'【Current Situation】', text: situationText },
  { icon:'◈', label:'【Wealth】',             text: wealthDetailText },
  { icon:'⊛', label:'【Career & Business】',  text: careerText },
  { icon:'✦', label:'【Advice】',             text: adviceText },
];
```

}

return [];
}

// Per-category intro paragraph — format spec:
// Card names **bold**, keywords *italic*. Direct statements only.
// No metaphors. No “energy”, “quality”, “horizon”, “speaks of”, “traces the arc”.
function buildOverview(cards, category) {
const b  = (i) => `<strong>${cards[i].name}</strong>`;
const k  = (i) => `<em>${cards[i].keywords[0]}</em>`;
const k1 = (i) => `<em>${cards[i].keywords[1]}</em>`;

// Core intro — same base for all categories
let intro =
`${b(0)} is at the center — you need ${k(0)} now. `+
`${b(1)} is your main obstacle, meaning ${k(1)} you are dealing with. `+
`${b(5)} is ahead — ${k(5)} is coming. `+
`${b(9)} points to ${k(9)} as the final direction.`;

// Category-specific additions
if (category === ‘love’) {
intro +=
`${b(6)} in the self position shows you are bringing ${k(6)} into your relationships.`+
`${b(7)} in your environment means ${k(7)} is shaping your connections.`;
}

if (category === ‘wealth’) {
intro +=
`${b(3)} is your material foundation — ${k(3)} is what you are building on.`+
`${b(2)} above shows your goal is ${k(2)}.`;
}

if (category === ‘general’) {
intro +=
`${b(3)} at the root means ${k(3)} is the base you are standing on.`+
`${b(6)} shows how you see yourself right now — ${k(6)}.`;
}

return intro;
}

function buildParagraph() {
const cat = selectedCategory || ‘general’;

// Show loading briefly for UX rhythm
document.getElementById(‘readingLoading’).style.display = ‘flex’;
document.getElementById(‘readingPara’).innerHTML = ‘’;
document.getElementById(‘readingBullets’).style.display = ‘none’;

const catLabel = { general:‘Your Reading’, love:‘Love Reading’, wealth:‘Wealth Reading’ };
document.getElementById(‘readingBoxTitle’).textContent = catLabel[cat] || ‘Your Reading’;

setTimeout(() => {
document.getElementById(‘readingLoading’).style.display = ‘none’;

```
const overview = CAT_OPEN[cat] + buildOverview(assignedCards, cat) + CAT_CLOSE[cat];
const bullets  = buildBullets(assignedCards, '', cat);

typeText(document.getElementById('readingPara'), overview, () => {
  renderBullets(bullets);
});
```

}, 900);
}

/* Animated typewriter for a plain text string */
function typeText(el, text, onDone) {
el.innerHTML = ‘’;
const words  = text.split(’ ’);
let   i      = 0;
const speed  = Math.max(18, Math.min(36, Math.round(6000 / words.length)));

function next() {
if (i >= words.length) {
el.innerHTML = text; // clean final render
if (onDone) onDone();
return;
}
el.innerHTML = words.slice(0, i + 1).join(’ ‘) + ‘<span class="cursor"></span>’;
i++;
const w = words[i - 1];
setTimeout(next, (w.endsWith(’.’) || w.endsWith(’,’)) ? speed * 4 : speed);
}
setTimeout(next, 300);
}

/* Render bullet points — accepts array of {icon, label, text} */
function renderBullets(bullets) {
if (!bullets || !bullets.length) return;

const inner = document.getElementById(‘readingBulletsInner’);
inner.innerHTML = ‘’;

bullets.forEach((d, idx) => {
const row = document.createElement(‘div’);
row.className = ‘reading-bullet-row’;
row.style.opacity = ‘0’;
row.style.transform = ‘translateY(10px)’;
row.style.transition = ‘opacity .4s ease, transform .4s ease’;
row.innerHTML =
`<div class="reading-bullet-icon">${d.icon}</div>`+
`<div class="reading-bullet-content">`+
`<div class="reading-bullet-label">${d.label}</div>`+
`<div class="reading-bullet-text">${d.text}</div>`+
`</div>`;
inner.appendChild(row);

```
setTimeout(() => {
  row.style.opacity   = '1';
  row.style.transform = 'translateY(0)';
}, 200 + idx * 160);
```

});

document.getElementById(‘readingBullets’).style.display = ‘block’;
}

/* ============================================================
MODAL — card detail
============================================================ */
function openModal(pi) {
const card = assignedCards[pi];
const pos  = POSITIONS[pi];

const isZhModal = currentLang === ‘zh’;
const zhPos  = isZhModal ? ZH_POSITIONS[pi] : pos;
const cardIdx = DB.indexOf(card);
const displayNameModal = isZhModal ? (ZH_CARD_NAMES[cardIdx] || card.name) : card.name;
const displayMeaning   = isZhModal ? (ZH_MEANINGS[cardIdx]   || card.meaning) : card.meaning;
const posLabel = isZhModal ? `第${zhPos.num}位 — ${zhPos.label}` : `Position ${toRoman(pos.num)} — ${pos.label}`;

document.getElementById(‘mBadge’).textContent   = posLabel;
document.getElementById(‘mName’).textContent    = displayNameModal;
document.getElementById(‘mPos’).textContent     = isZhModal ? zhPos.context : pos.context;
document.getElementById(‘mMeaning’).innerHTML   = displayMeaning;

const artEl = document.getElementById(‘mArt’);
const symEl = document.getElementById(‘mSym’);
const oldImg = artEl.querySelector(‘img’);
if (oldImg) oldImg.remove();

if (card.img) {
symEl.style.display = ‘none’;
const img = document.createElement(‘img’);
img.src = card.img; img.alt = card.name;
artEl.appendChild(img);
} else {
symEl.style.display = ‘’;
symEl.textContent   = card.symbol;
symEl.className = ‘modal-art-sym’ + (card.id.startsWith(‘penta_’) ? ’ sym-gold’ : ‘’);
}

document.getElementById(‘modalOv’).classList.add(‘open’);
document.body.style.overflow = ‘hidden’;
}

function closeModal(e) {
if (e.target === document.getElementById(‘modalOv’)) closeModalDirect();
}
function closeModalDirect() {
document.getElementById(‘modalOv’).classList.remove(‘open’);
// Restore correct scroll state: if on spread page keep it scrollable
const onSpread = document.getElementById(‘phase-spread’) &&
document.getElementById(‘phase-spread’).classList.contains(‘active’);
document.body.style.overflow = onSpread ? ‘auto’ : ‘’;
}

/* ============================================================
PHASE NAVIGATION
============================================================ */
function goPhase(name) {
document.querySelectorAll(’.phase’).forEach(p => p.classList.remove(‘active’));
document.getElementById(`phase-${name}`).classList.add(‘active’);
}

function goHome() {
doReset();           // reset state + go to shuffle phase first
showPage(‘reading’); // then update nav active state
}

function doReset() {
shuffledDeck  = [];
selectedSlots = [];
assignedCards = [];
document.body.classList.remove(‘scrollable’);
document.getElementById(‘celticCross’).innerHTML   = ‘’;
document.getElementById(‘readingPara’).innerHTML   = ‘’;
document.getElementById(‘readingBullets’).style.display  = ‘none’;
// Restore At a Glance label visibility for EN
const gl = document.querySelector(’#readingBullets .reading-section-label’);
if (gl) gl.style.display = ‘’;
document.getElementById(‘readingLoading’).style.display  = ‘none’;
document.getElementById(‘readingBoxTitle’).textContent   = ‘Your Reading’;
document.getElementById(‘drawCount’).textContent   = ‘0 / 10’;
document.getElementById(‘drawPill’).classList.remove(‘complete’);
document.getElementById(‘shuffleBtn’).disabled = false;
// Clear intention so next user starts fresh
selectCategory(‘general’);
goPhase(‘shuffle’);
}

/* ============================================================
PAGE NAVIGATION
============================================================ */
function showPage(id) {
document.querySelectorAll(’.page’).forEach(p => p.classList.remove(‘active’));
document.getElementById(`page-${id}`).classList.add(‘active’);
document.querySelectorAll(’.nav-links a’).forEach(a => a.classList.remove(‘active’));
document.getElementById(`nav-${id}`).classList.add(‘active’);
if (id === ‘library’) buildLibrary();

if (id === ‘reading’) {
const spreadEl = document.getElementById(‘phase-spread’);
const onSpread = spreadEl && spreadEl.classList.contains(‘active’);
if (onSpread) {
document.body.classList.add(‘scrollable’);
} else {
document.body.classList.remove(‘scrollable’);
}
} else {
document.body.classList.add(‘scrollable’);
}
}

/* ============================================================
SHARE
============================================================ */
function shareApp() {
const d = {title:‘The Arcana — Free Tarot Reading’,text:‘I just drew my Celtic Cross spread ✦ Get your free reading:’,url:window.location.href};
if (navigator.share) { navigator.share(d).catch(()=>{}); }
else {
navigator.clipboard.writeText(window.location.href)
.then(()  => showToast(‘Link copied ✦’))
.catch(()  => showToast(’Copy: ’ + window.location.href));
}
}
function showToast(m) {
const t = document.getElementById(‘toast’);
t.textContent = m; t.classList.add(‘show’);
setTimeout(() => t.classList.remove(‘show’), 3000);
}

/* ============================================================
PERSONAL FORM
============================================================ */
function submitForm() {
const n = document.getElementById(‘fName’).value.trim();
const e = document.getElementById(‘fEmail’).value.trim();
const q = document.getElementById(‘fQ’).value.trim();
if (!n || !e || !q) {
[[‘fName’,n],[‘fEmail’,e],[‘fQ’,q]].forEach(([id,v]) => {
if (!v) {
const el = document.getElementById(id);
el.style.borderColor = ‘var(–accent-wine)’;
el.addEventListener(‘input’, () => el.style.borderColor=’’, {once:true});
}
});
return;
}
document.getElementById(‘pForm’).style.display = ‘none’;
document.getElementById(‘pOk’).classList.add(‘show’);
}

/* ============================================================
THEME
============================================================ */
function setupTheme() {
document.getElementById(‘themeToggle’).addEventListener(‘click’, () => {
const html = document.documentElement;
const isL  = html.getAttribute(‘data-theme’) === ‘light’;
html.setAttribute(‘data-theme’, isL ? ‘dark’ : ‘light’);
document.getElementById(‘themeToggle’).textContent = isL ? ‘☀’ : ‘☾’;
});
}

/* ============================================================
UTILS
============================================================ */
function toRoman(n) {
const m=[[‘X’,10],[‘IX’,9],[‘VIII’,8],[‘VII’,7],[‘VI’,6],[‘V’,5],[‘IV’,4],[‘III’,3],[‘II’,2],[‘I’,1]];
let r=’’;for(const[s,v]of m){while(n>=v){r+=s;n-=v}}return r;
}

/* ── Card Library ── */
function buildLibrary() {
const grid = document.getElementById(‘libGrid’);
if (!grid) return;
// Always rebuild so language changes are reflected
grid.innerHTML = ‘’;
const L = LANG[currentLang];
const suitLabelMap = {
major: L.suit_major,
wands: L.suit_wands,
cups:  L.suit_cups,
swords:L.suit_swords,
penta: L.suit_penta
};
DB.forEach((card, i) => {
const suit      = card.id.split(’_’)[0];
const suitLabel = suitLabelMap[suit] || suit;
const cardName  = (currentLang === ‘zh’) ? (ZH_CARD_NAMES[i] || card.name) : card.name;
const isPenta   = suit === ‘penta’;
const symClass  = ‘lib-card-art-sym’ + (isPenta ? ’ sym-gold’ : ‘’);
const artContent = card.img
? `<img src="${card.img}" alt="${cardName}" loading="lazy" />`
: `<span class="${symClass}">${card.symbol}</span>`;
const el = document.createElement(‘div’);
el.className    = ‘lib-card’;
el.dataset.suit = suit;
el.innerHTML =
`<div class="lib-card-art">${artContent}</div>`+
`<div class="lib-card-info">`+
`<div class="lib-card-name">${cardName}</div>`+
`<div class="lib-card-suit">${suitLabel}</div>`+
`</div>`;
el.addEventListener(‘click’, () => openLibModal(i));
grid.appendChild(el);
});
}

function filterLib(suit, btn) {
document.querySelectorAll(’.lib-filter-btn’).forEach(b => b.classList.remove(‘active’));
btn.classList.add(‘active’);
document.querySelectorAll(’.lib-card’).forEach(c => {
c.style.display = (suit === ‘all’ || c.dataset.suit === suit) ? ‘’ : ‘none’;
});
}

function openLibModal(dbIdx) {
const card    = DB[dbIdx];
const L       = LANG[currentLang];
const isZh    = currentLang === ‘zh’;
const suit    = card.id.split(’_’)[0];
const suitLabelMap = {
major: L.suit_major,
wands: L.suit_wands,
cups:  L.suit_cups,
swords:L.suit_swords,
penta: L.suit_penta
};
const displayName = isZh ? (ZH_CARD_NAMES[dbIdx] || card.name) : card.name;

document.getElementById(‘mBadge’).textContent   = suitLabelMap[suit] || suit;
document.getElementById(‘mName’).textContent    = displayName;
document.getElementById(‘mPos’).textContent     = L.card_meaning_lbl;
document.getElementById(‘mMeaning’).innerHTML   = isZh ? (ZH_MEANINGS[dbIdx] || card.meaning) : card.meaning;
document.querySelector(’.modal-mlabel’).textContent = L.modal_interp;

const artEl = document.getElementById(‘mArt’);
const symEl = document.getElementById(‘mSym’);
const oldImg = artEl.querySelector(‘img’);
if (oldImg) oldImg.remove();
if (card.img) {
symEl.style.display = ‘none’;
const img = document.createElement(‘img’); img.src = card.img; img.alt = displayName;
artEl.appendChild(img);
} else {
symEl.style.display = ‘’;
symEl.textContent = card.symbol;
symEl.className = ‘modal-art-sym’ + (card.id.startsWith(‘penta_’) ? ’ sym-gold’ : ‘’);
}
document.getElementById(‘modalOv’).classList.add(‘open’);
document.body.style.overflow = ‘hidden’;
}

/* ============================================================
LANGUAGE SYSTEM
currentLang: ‘en’ | ‘zh’
All UI strings live in LANG. Reading engine has parallel
ZH_ prefixed constants. Card names are translated via
ZH_CARD_NAMES lookup.
============================================================ */
let currentLang = ‘en’;

/* ── UI string translations ── */
const LANG = {
en: {
brand:            ‘The Arcana’,
nav_reading:      ‘Free Celtic Cross’,
nav_personal:     ‘Personal Reading’,
nav_library:      ‘Card Library’,
nav_reading_short:‘Reading’,
nav_personal_short:‘Personal’,
nav_library_short: ‘Library’,
eyebrow_spread:   ‘Celtic Cross Spread’,
intro_title:      ‘Consult the <em>Arcana</em>’,
intro_sub:        ‘Still the mind. Choose your focus — then shuffle when ready.’,
cat_label:        ‘choose your focus’,
cat_general:      ‘General’,
cat_love:         ‘Love’,
cat_wealth:       ‘Wealth’,
shuffle_btn:      ‘✦ Shuffle the Deck’,
fan_eyebrow:      ‘Choose Your Cards’,
fan_title:        ‘Select <em>ten</em> cards’,
fan_sub:          ‘Touch each card that calls to you’,
drawn_label:      ‘Cards Drawn’,
spread_eyebrow:   ‘The Celtic Cross’,
spread_title:     ‘Your Reading’,
spread_sub:       ‘Click any card to explore its meaning’,
loading_text:     ‘The cards are speaking…’,
at_a_glance:      ‘At a Glance’,
btn_new:          ‘↺ New Reading’,
btn_share:        ‘⇪ Share This Reading’,
modal_interp:     ‘Interpretation’,
modal_share:      ‘⇪ Share This Reading With a Friend’,
reading_box_title:‘Your Reading’,
pers_eyebrow:     ‘Deep Interpretation’,
pers_title:       ‘A Reading <em>Just for You</em>’,
pers_lead:        ‘Beyond the algorithm lies intuition honed over years. Share what weighs on your spirit — a personal reading offers context, nuance, and the space to truly listen.’,
avail_strong:     ‘Limited Availability’,
avail_span:       ‘Request a deep personal interpretation — Response Time: 2–3 Days. Each reading receives full, unhurried attention.’,
lbl_name:         ‘Your Name’,
lbl_email:        ‘Email Address’,
lbl_question:     ‘Your Question’,
ph_name:          ‘How shall I call you?’,
ph_email:         ‘Where shall I send your reading?’,
ph_question:      ‘What is weighing on your heart?’,
form_hint:        ‘The more openly you share, the more precisely the cards can speak.’,
form_submit:      ‘Send My Request →’,
form_note:        ‘Your question is held with care and complete discretion.’,
ok_title:         ‘Your Request Is Received’,
ok_body:          ‘The cards have noted your inquiry. Expect a personal response within 2–3 days.’,
lib_title:        ‘The 78 Cards’,
lib_sub:          ‘Your complete deck — tap any card to read its interpretation’,
lib_all:          ‘All 78’,
lib_major:        ‘Major Arcana’,
lib_wands:        ‘Wands’,
lib_cups:         ‘Cups’,
lib_swords:       ‘Swords’,
lib_penta:        ‘Pentacles’,
suit_major:       ‘Major Arcana’,
suit_wands:       ‘Wands’,
suit_cups:        ‘Cups’,
suit_swords:      ‘Swords’,
suit_penta:       ‘Pentacles’,
card_meaning_lbl: ‘Card meaning’,
reading_general:  ‘Your Reading’,
reading_love:     ‘Love Reading’,
reading_wealth:   ‘Wealth Reading’,
},
zh: {
brand:            ‘神秘奥义’,
nav_reading:      ‘凯尔特十字牌阵’,
nav_personal:     ‘个人解读’,
nav_library:      ‘牌义库’,
nav_reading_short:‘占卜’,
nav_personal_short:‘个人’,
nav_library_short: ‘牌库’,
eyebrow_spread:   ‘凯尔特十字牌阵’,
intro_title:      ‘问询<em>奥义</em>’,
intro_sub:        ‘静心凝神，选择方向，再洗牌起卦。’,
cat_label:        ‘选择占卜方向’,
cat_general:      ‘综合’,
cat_love:         ‘感情’,
cat_wealth:       ‘财富’,
shuffle_btn:      ‘✦ 洗牌’,
fan_eyebrow:      ‘选择你的牌’,
fan_title:        ‘选择<em>十张</em>牌’,
fan_sub:          ‘触摸每一张向你呼唤的牌’,
drawn_label:      ‘已选牌数’,
spread_eyebrow:   ‘凯尔特十字’,
spread_title:     ‘你的解读’,
spread_sub:       ‘点击任意牌探索其含义’,
loading_text:     ‘牌正在述说……’,
at_a_glance:      ‘一览’,
btn_new:          ‘↺ 重新占卜’,
btn_share:        ‘⇪ 分享此解读’,
modal_interp:     ‘牌义解读’,
modal_share:      ‘⇪ 将此解读分享给朋友’,
reading_box_title:‘你的解读’,
pers_eyebrow:     ‘深度解读’,
pers_title:       ‘专属<em>你的</em>解读’,
pers_lead:        ‘算法之外，是多年磨砺而成的直觉。分享你内心的困惑——个人解读提供更深层的洞察、细腻的体察与真正的倾听。’,
avail_strong:     ‘名额有限’,
avail_span:       ‘申请深度个人解读——回复时间：2至3个工作日。每份解读均获得完整、从容的全心关注。’,
lbl_name:         ‘你的名字’,
lbl_email:        ‘电子邮箱’,
lbl_question:     ‘你的问题’,
ph_name:          ‘我该如何称呼你？’,
ph_email:         ‘解读发送至哪里？’,
ph_question:      ‘什么事情压在你心头？’,
form_hint:        ‘你分享得越坦诚，牌就能说得越精准。’,
form_submit:      ‘提交申请 →’,
form_note:        ‘你的问题将被谨慎保密，绝对尊重。’,
ok_title:         ‘你的申请已收到’,
ok_body:          ‘牌已铭记你的询问。请在2至3个工作日内等待回复。’,
lib_title:        ‘七十八张牌’,
lib_sub:          ‘完整牌组——点击任意牌阅读其解读’,
lib_all:          ‘全部七十八张’,
lib_major:        ‘大阿卡纳’,
lib_wands:        ‘权杖’,
lib_cups:         ‘圣杯’,
lib_swords:       ‘宝剑’,
lib_penta:        ‘星币’,
suit_major:       ‘大阿卡纳’,
suit_wands:       ‘权杖’,
suit_cups:        ‘圣杯’,
suit_swords:      ‘宝剑’,
suit_penta:       ‘星币’,
card_meaning_lbl: ‘牌义’,
reading_general:  ‘你的解读’,
reading_love:     ‘感情解读’,
reading_wealth:   ‘财富解读’,
}
};

/* ── Mandarin card names (same order as DB array) ── */
const ZH_CARD_NAMES = [
// 大阿卡纳 Major Arcana (0-21)
‘愚者’,‘魔术师’,‘女祭司’,‘皇后’,‘皇帝’,‘教皇’,‘恋人’,‘战车’,
‘力量’,‘隐士’,‘命运之轮’,‘正义’,‘倒吊人’,‘死神’,‘节制’,‘恶魔’,
‘塔’,‘星星’,‘月亮’,‘太阳’,‘审判’,‘世界’,
// 权杖 Wands (22-35)
‘权杖王牌’,‘权杖二’,‘权杖三’,‘权杖四’,‘权杖五’,‘权杖六’,‘权杖七’,
‘权杖八’,‘权杖九’,‘权杖十’,‘权杖侍从’,‘权杖骑士’,‘权杖王后’,‘权杖国王’,
// 圣杯 Cups (36-49)
‘圣杯王牌’,‘圣杯二’,‘圣杯三’,‘圣杯四’,‘圣杯五’,‘圣杯六’,‘圣杯七’,
‘圣杯八’,‘圣杯九’,‘圣杯十’,‘圣杯侍从’,‘圣杯骑士’,‘圣杯王后’,‘圣杯国王’,
// 宝剑 Swords (50-63)
‘宝剑王牌’,‘宝剑二’,‘宝剑三’,‘宝剑四’,‘宝剑五’,‘宝剑六’,‘宝剑七’,
‘宝剑八’,‘宝剑九’,‘宝剑十’,‘宝剑侍从’,‘宝剑骑士’,‘宝剑王后’,‘宝剑国王’,
// 星币 Pentacles (64-77)
‘星币王牌’,‘星币二’,‘星币三’,‘星币四’,‘星币五’,‘星币六’,‘星币七’,
‘星币八’,‘星币九’,‘星币十’,‘星币侍从’,‘星币骑士’,‘星币王后’,‘星币国王’
];

/* ── Mandarin keywords — same index order as DB (78 cards) ── */
const ZH_KEYWORDS = [
// 大阿卡纳 Major Arcana
[‘崭新开始’,‘盲目信念’,‘无限潜能’],
[‘专注意志’,‘工具掌握’,‘显化’],
[‘内在洞知’,‘隐藏真相’,‘两者之间’],
[‘丰盛’,‘创造性滋养’,‘自然生长’],
[‘权威’,‘清晰结构’,‘积累的纪律’],
[‘传统’,‘承袭信念’,‘精神惯例’],
[‘契合’,‘决定性选择’,‘真实结合’],
[‘定向意志’,‘掌控张力’,‘向前动能’],
[‘沉静勇气’,‘内在韧性’,‘柔韧坚持’],
[‘刻意独处’,‘内在灯光’,‘积累的智慧’],
[‘必然循环’,‘转变的命运’,‘升降之道’],
[‘公正裁量’,‘不偏不倚的真相’,‘应得的因果’],
[‘自愿悬停’,‘新的视角’,‘放手以观’],
[‘必要转化’,‘释放’,‘必须放下之物’],
[‘融合’,‘中道’,‘耐心炼金’],
[‘已命名的束缚’,‘松动的锁链’,‘囚禁的幻象’],
[‘突如其来的动荡’,‘虚假结构的崩塌’,‘清场’],
[‘重燃的希望’,‘沉静的信念’,‘疗愈进行中’],
[‘变幻的幻象’,‘深层直觉’,‘未照亮的路’],
[‘耀眼清明’,‘纯粹喜悦’,‘完全可见’],
[‘应答呼唤’,‘完全升起’,‘夺回的第二次机会’],
[‘整全’,‘一个圆满的循环’,‘完成的视野’],
// 权杖 Wands
[‘创意火花’,‘点燃的激情’,‘开始的冲动’],
[‘提前规划’,‘拓宽的视野’,‘大胆愿景’],
[‘扩张中的动能’,‘耐心守望’,‘已启航的船’],
[‘庆祝’,‘真实的到达’,‘根基完成’],
[‘有益的摩擦’,‘竞争的力量’,‘选择值得一战之事’],
[‘公众认可’,‘赢得的胜利’,‘成功的信号’],
[‘守住立场’,‘防御的位置’,‘压力下的信念’],
[‘迅速行动’,‘加速的事件’,‘行进中的讯息’],
[‘饱经风霜的韧性’,‘守望的耐力’,‘仍然站立’],
[‘过重的负担’,‘可选的重量’,‘触手可及的完成’],
[‘新鲜热情’,‘最初的好奇’,‘无条件的开始’],
[‘大胆冲锋’,‘热情追求’,‘对准目标的火’],
[‘磁性权威’,‘创意温暖’,‘自信的存在’],
[‘远见领导力’,‘定向之火’,‘大格局创意掌控’],
// 圣杯 Cups
[‘情感的开启’,‘给予的恩典’,‘爱的开始’],
[‘真实的互惠’,‘真诚的相遇’,‘彼此认可’],
[‘共享的喜悦’,‘共同体’,‘归属的温暖’],
[‘向内退隐’,‘未见的奉献之杯’,‘沉思的停顿’],
[‘被尊重的悲伤’,‘失去后余留之物’,‘仍立着的杯’],
[‘怀旧’,‘重访的纯真’,‘浮现的过去’],
[‘过多的愿景’,‘选择真实’,‘幻象与实质’],
[‘有意识的离开’,‘走开’,‘转向滋养你之物’],
[‘愿望成真’,‘深层满足’,‘不带愧疚的满足’],
[‘情感圆满’,‘持久的归属’,‘经受住考验的爱’],
[‘细腻的直觉’,‘情感讯息’,‘梦幻的敏感’],
[‘浪漫的追求’,‘跟随感觉’,‘行进中的理想主义者’],
[‘深层慈悲’,‘情感的稳定’,‘无吸附的共情’],
[‘情感掌握’,‘智慧的慈悲’,‘稳定的深度’],
// 宝剑 Swords
[‘洞穿的清明’,‘突破性洞见’,‘切穿的真相’],
[‘刻意的盲目’,‘被回避的选择’,‘意志维持的僵局’],
[‘被承认的悲痛’,‘一道已认可的伤’,‘必须被感受的哀伤’],
[‘心智的休息’,‘战略性撤退’,‘战后的恢复’],
[‘空洞的胜利’,‘冲突的代价’,‘明智地选择战场’],
[‘必要的离开’,‘走向更平静的水域’,‘重压下的过渡’],
[‘迂回的行动’,‘策略或逃避’,‘迂回之路’],
[‘自我设限’,‘可移除的眼罩’,‘信念作为囚笼’],
[‘心智的暗夜’,‘放大的焦虑’,‘夜晚的恐惧与晨光的真相’],
[‘绝对的终结’,‘触底’,‘唯一的方向是向上’],
[‘敏锐的感知’,‘探询的好奇’,‘原始的心智能量’],
[‘迅速决断的行动’,‘智识冲锋’,‘快想——后说’],
[‘清醒的辨别力’,‘积累的清明’,‘诚实的善意胜过舒适的谎言’],
[‘原则性权威’,‘不妥协的清明’,‘诚实判断的重量’],
// 星币 Pentacles
[‘物质的种子’,‘有形的新开始’,‘真实的机会’],
[‘动态中的平衡’,‘被权衡的优先项’,‘压力下的适应力’],
[‘协作的精通’,‘分享的技能’,‘共同建造’],
[‘囤积’,‘握得太紧’,‘安全感变成贫乏’],
[‘物质困境’,‘感到被排除在外’,‘可能未被看见的帮助’],
[‘资源的流动’,‘慷慨及其阴影’,‘公平的交换’],
[‘中途评估’,‘耐心评价’,‘投资在回报吗？’],
[‘通过重复达到精通’,‘专注的手艺’,‘为工作本身而工作’],
[‘积累的丰盛’,‘自给自足’,‘栖居于你所建造之中’],
[‘遗产’,‘跨代的富足’,‘超越你之后仍留存之物’],
[‘勤奋的学习’,‘真诚的实践好奇心’,‘认真的初学者’],
[‘有条不紊的进步’,‘可靠的跟进’,‘把事做对胜过做快’],
[‘实际的温暖’,‘滋养的丰盛’,‘踏实而慷慨’],
[‘物质掌握’,‘耐心的管理’,‘体现的、从容的成功’]
];
/* ── Mandarin card meanings (upright + reversed) ── */
const ZH_MEANINGS = [
`<strong>正位：</strong>新的开始、纯真、自发性、拥抱未知、信念的飞跃。<br><strong>逆位：</strong>鲁莽、害怕改变、犹豫不决、逃避现实、愚蠢的冒险。`,
`<strong>正位：</strong>显化、意志力、创造力、资源运用得当、行动力、沟通技巧。<br><strong>逆位：</strong>操纵、未开发的潜能、诡计、计划不周、才能被浪费。`,
`<strong>正位：</strong>直觉、神秘、潜意识、内在智慧、静止、等待。<br><strong>逆位：</strong>忽视直觉、隐藏的秘密、表面化的判断、焦虑、内在失衡。`,
`<strong>正位：</strong>丰收、生育、滋养、美丽、自然、感官享受。<br><strong>逆位：</strong>创意受阻、依赖他人、缺乏成长、懒惰、家庭纠纷。`,
`<strong>正位：</strong>权威、结构、稳定、领导力、父亲形象、理性。<br><strong>逆位：</strong>僵化、独裁、缺乏纪律、控制欲过强、不成熟。`,
`<strong>正位：</strong>传统、信仰、精神指引、遵从、教育、婚姻。<br><strong>逆位：</strong>挑战传统、非正统、叛逆、束缚、错误的建议。`,
`<strong>正位：</strong>爱、和谐、价值观的选择、关系、性结合、吸引力。<br><strong>逆位：</strong>不和谐、失衡、沟通不畅、承诺恐惧、三角关系。`,
`<strong>正位：</strong>决心、意志力、胜利、自我控制、旅行、克服困难。<br><strong>逆位：</strong>失控、侵略性、缺乏方向、失败、停滞不前。`,
`<strong>正位：</strong>勇气、耐心、同情心、内在力量、驯服野兽。<br><strong>逆位：</strong>自我怀疑、软弱、冲动、脆弱、被欲望控制。`,
`<strong>正位：</strong>内省、孤独、寻找指引、智慧、退隐、内在之光。<br><strong>逆位：</strong>孤立、寂寞、拒绝帮助、逃避现实、偏执。`,
`<strong>正位：</strong>命运、转折点、好运、因果、周期循环、机遇。<br><strong>逆位：</strong>坏运气、抗拒改变、打断、失控、厄运。`,
`<strong>正位：</strong>公平、真相、因果报应、法律、诚实、责任。<br><strong>逆位：</strong>不公、欺骗、逃避责任、偏袒、失衡。`,
`<strong>正位：</strong>牺牲、换个角度、等待、放手、顺从、暂停。<br><strong>逆位：</strong>停滞不前、犹豫、无谓的牺牲、固执、拖延。`,
`<strong>正位：</strong>结束、转变、新生、放手、蜕变、不可避免的改变。<br><strong>逆位：</strong>抗拒改变、停滞、恐惧新生、苟延残喘、无法放手。`,
`<strong>正位：</strong>平衡、适度、耐心、调和、和谐、管理。<br><strong>逆位：</strong>失衡、冲突、急躁、效率低、不融洽。`,
`<strong>正位：</strong>束缚、物质主义、阴影面、依赖、欲望、上瘾。<br><strong>逆位：</strong>挣脱束缚、重获主权、摆脱依赖、觉醒。`,
`<strong>正位：</strong>剧变、突然的改变、觉醒、混乱、破产、信念崩塌。<br><strong>逆位：</strong>避免灾难、恐惧改变、勉强维持、即将发生的危机。`,
`<strong>正位：</strong>希望、灵感、平静、疗愈、乐观、指引。<br><strong>逆位：</strong>绝望、失去信心、脱节、消极、悲观。`,
`<strong>正位：</strong>幻觉、恐惧、焦虑、潜意识、迷惑、谎言。<br><strong>逆位：</strong>真相揭露、释放恐惧、清晰、克服困境。`,
`<strong>正位：</strong>喜悦、成功、活力、乐观、正能量、结婚、诞生。<br><strong>逆位：</strong>短暂的悲伤、缺乏热情、挫折、悲观、孤独。`,
`<strong>正位：</strong>重生、觉醒、召唤、宽恕、决定性时刻、升华。<br><strong>逆位：</strong>自我怀疑、拒绝觉醒、后悔、停滞、软弱。`,
`<strong>正位：</strong>完成、成就、整合、旅行、圆满、归属感。<br><strong>逆位：</strong>未完成、缺乏结束感、失望、无法达到目标。`,
`<strong>正位：</strong>新行动、灵感、创造力的火花、机遇、开始。<br><strong>逆位：</strong>延迟、缺乏动力、受挫、虚假的开始。`,
`<strong>正位：</strong>未来规划、决定、胆识、个人领地。<br><strong>逆位：</strong>恐惧未知、坏计划、犹豫不决。`,
`<strong>正位：</strong>扩张、远见、海外机会、领导力。<br><strong>逆位：</strong>障碍、延误、目光短浅、合作不佳。`,
`<strong>正位：</strong>庆祝、和谐、家庭、稳定、完工。<br><strong>逆位：</strong>过渡期、不稳定、缺乏支持、不受欢迎。`,
`<strong>正位：</strong>冲突、竞争、分歧、挑战、争执。<br><strong>逆位：</strong>内部冲突、避免冲突、解决分歧。`,
`<strong>正位：</strong>胜利、好消息、进步、自信、认可。<br><strong>逆位：</strong>失败、骄傲自大、背叛、延迟的成功。`,
`<strong>正位：</strong>防御、勇气、面对逆境、优势。<br><strong>逆位：</strong>屈服、不堪重负、缺乏自信。`,
`<strong>正位：</strong>速度、行动、迅速、通讯、自由。<br><strong>逆位：</strong>慌乱、延误、计划外、焦虑。`,
`<strong>正位：</strong>韧性、最后防线、坚持、防备。<br><strong>逆位：</strong>脆弱、耗尽、偏执、放弃。`,
`<strong>正位：</strong>负担、压力、责任、成功但疲惫。<br><strong>逆位：</strong>崩溃、精疲力尽、卸下重担。`,
`<strong>正位：</strong>新消息、热情、精力、探索。<br><strong>逆位：</strong>坏消息、缺乏方向、不成熟。`,
`<strong>正位：</strong>能量、激情、冲动、冒险、旅程。<br><strong>逆位：</strong>嫉妒、竞争、鲁莽、毁灭。`,
`<strong>正位：</strong>自信、精力充沛、独立、温暖。<br><strong>逆位：</strong>苛求、嫉妒、情绪不稳定。`,
`<strong>正位：</strong>领导力、远见、成熟、创造性思维。<br><strong>逆位：</strong>霸道、冲动、完美主义。`,
`<strong>正位：</strong>新感情、同情、直觉、丰盛。<br><strong>逆位：</strong>情感空虚、心碎、压抑、失落。`,
`<strong>正位：</strong>结合、吸引、伙伴关系、平等。<br><strong>逆位：</strong>不平等、误解、分离、沟通不畅。`,
`<strong>正位：</strong>庆祝、友谊、团体、欢乐、重逢。<br><strong>逆位：</strong>过度放纵、八卦、孤立、单恋。`,
`<strong>正位：</strong>冷漠、沉思、厌倦、冷漠。<br><strong>逆位：</strong>重获动力、新机遇、清醒。`,
`<strong>正位：</strong>失落、悲伤、悔恨、沉湎过去。<br><strong>逆位：</strong>接受、向前看、疗愈、原谅。`,
`<strong>正位：</strong>怀旧、童年、回忆、礼物、单纯。<br><strong>逆位：</strong>沉溺过去、不切实际、困住。`,
`<strong>正位：</strong>幻想、选择、一厢情愿。<br><strong>逆位：</strong>清晰、抉择、脚踏实地、清醒。`,
`<strong>正位：</strong>离开、寻找更高目标、失望、勇气。<br><strong>逆位：</strong>恐惧改变、滞留、逃避问题。`,
`<strong>正位：</strong>愿望达成、满足、舒适、享受。<br><strong>逆位：</strong>不满、贪婪、表面快乐、空虚。`,
`<strong>正位：</strong>情感满足、和谐、家庭、幸福。<br><strong>逆位：</strong>家庭冲突、不和谐、价值观不合。`,
`<strong>正位：</strong>创意、直觉、新消息、温柔、孩子气。<br><strong>逆位：</strong>创意受阻、情绪不稳定、敏感、消息延误。`,
`<strong>正位：</strong>浪漫、魅力、邀请、理想主义。<br><strong>逆位：</strong>情绪波动、嫉妒、失望、花心。`,
`<strong>正位：</strong>同情、疗愈、直觉、情感安全。<br><strong>逆位：</strong>情感勒索、不安全感、依赖、自我牺牲。`,
`<strong>正位：</strong>情绪控制、外交、忠告、宽容。<br><strong>逆位：</strong>情绪操纵、压抑、冷漠、无情。`,
`<strong>正位：</strong>清晰、突破、新想法、正义、胜利。<br><strong>逆位：</strong>困惑、混乱、残酷、冲突。`,
`<strong>正位：</strong>僵局、逃避、和平、难以抉择。<br><strong>逆位：</strong>解除僵局、真相揭露、挣扎、混乱。`,
`<strong>正位：</strong>心碎、悲伤、失落、分离、眼泪。<br><strong>逆位：</strong>疗愈、宽恕、放下伤痛、压抑。`,
`<strong>正位：</strong>休息、恢复、沉思、退隐。<br><strong>逆位：</strong>精疲力尽、压力、过度劳累。`,
`<strong>正位：</strong>冲突、欺凌、紧张、不择手段。<br><strong>逆位：</strong>和解、放下自尊、过去的冲突。`,
`<strong>正位：</strong>过渡、放下、疗愈、顺其自然。<br><strong>逆位：</strong>停滞、抗拒改变、沉湎过去。`,
`<strong>正位：</strong>欺骗、诡计、策略、隐秘行动。<br><strong>逆位：</strong>清醒、直面后果、坦白。`,
`<strong>正位：</strong>束缚、孤立、无力感、自我设限。<br><strong>逆位：</strong>释放、重获自由、看到希望。`,
`<strong>正位：</strong>焦虑、噩梦、绝望、内耗。<br><strong>逆位：</strong>战胜恐惧、希望、平静、释放。`,
`<strong>正位：</strong>毁灭、失败、背叛、痛苦的结局。<br><strong>逆位：</strong>重生、学习教训、恢复、反弹。`,
`<strong>正位：</strong>警觉、好奇心、新消息、沟通。<br><strong>逆位：</strong>谣言、欺骗、窥视、不成熟。`,
`<strong>正位：</strong>直接、武断、快速行动、辩论。<br><strong>逆位：</strong>霸道、冲动、破坏性、争论。`,
`<strong>正位：</strong>诚实、敏锐、公正、独立。<br><strong>逆位：</strong>尖酸、残忍、偏见、孤独。`,
`<strong>正位：</strong>理智、权威、纪律、结构。<br><strong>逆位：</strong>暴政、操纵、严厉、无情。`,
`<strong>正位：</strong>新财务开始、富足、机会、繁荣。<br><strong>逆位：</strong>错失机会、贪婪、财务危机、不育。`,
`<strong>正位：</strong>平衡、灵活、娱乐、适应力。<br><strong>逆位：</strong>失去平衡、不堪重负、财务纠纷。`,
`<strong>正位：</strong>团队合作、技能、质量、计划。<br><strong>逆位：</strong>缺乏团队精神、未充分利用技能、平庸。`,
`<strong>正位：</strong>节俭、控制、保守、财产、安全感。<br><strong>逆位：</strong>贪婪、挥霍、僵化、财务障碍。`,
`<strong>正位：</strong>贫困、孤立、不安全感、失业、精神空虚。<br><strong>逆位：</strong>恢复、精神疗愈、积极改变。`,
`<strong>正位：</strong>给予、接受、慷慨、慈善、分享。<br><strong>逆位：</strong>不平等、债务、贿赂、自私。`,
`<strong>正位：</strong>评估、回报、暂停、耐心、反思。<br><strong>逆位：</strong>不耐烦、低回报、焦虑、投资损失。`,
`<strong>正位：</strong>学徒、专注、勤奋、技能提升。<br><strong>逆位：</strong>缺乏专注、单调、野心不足、马虎。`,
`<strong>正位：</strong>自律、自足、奢华、成就、独立。<br><strong>逆位：</strong>安全感幻灭、过度保护、杂乱、孤立。`,
`<strong>正位：</strong>财富、传承、家庭、稳定、长期成功。<br><strong>逆位：</strong>财务纠纷、家族争斗、失去遗产、动荡。`,
`<strong>正位：</strong>新技能、学习、专注、讯息、野心。<br><strong>逆位：</strong>缺乏进展、不切实际、浪费天赋。`,
`<strong>正位：</strong>效率、保守、勤奋、责任感。<br><strong>逆位：</strong>停滞、懒惰、缺乏方向、麻木。`,
`<strong>正位：</strong>养育、务实、丰盛、自然、舒适。<br><strong>逆位：</strong>财务不安全、忽视自我、依赖。`,
`<strong>正位：</strong>财富、商业头脑、安全、领导力、务实。<br><strong>逆位：</strong>物质主义、贪婪、挥霍、不稳定。`,
];

/* ── Mandarin position labels ── */
const ZH_POSITIONS = [
{num:1,  label:‘当下’,    context:‘此牌反映你当前的处境’},
{num:2,  label:‘阻碍’,    context:‘此牌代表交叉影响或挑战’},
{num:3,  label:‘上方’,    context:‘此牌显示你意识中的目标或理想’},
{num:4,  label:‘根基’,    context:‘此牌揭示潜意识力量或过去的基础’},
{num:5,  label:‘过去’,    context:‘此牌述说正在消退或离去的事物’},
{num:6,  label:‘未来’,    context:‘此牌指向即将到来的近期发展’},
{num:7,  label:‘自我’,    context:‘此牌映照你如何看待自己或你的态度’},
{num:8,  label:‘环境’,    context:‘此牌反映围绕你的能量与人事’},
{num:9,  label:‘希望与恐惧’,context:‘此牌触及你内心最深的希望与恐惧’},
{num:10, label:‘结果’,    context:‘此牌揭示当前力量的潜在走向’},
];

/* ── Mandarin reading engine constants ── */
const ZH_CAT_OPEN = {
general: ‘十张牌已落定。’,
love:    ‘十张牌已落定。’,
wealth:  ‘十张牌已落定。’
};
const ZH_CAT_CLOSE = {
general: ‘’,
love:    ‘’,
wealth:  ‘’
};

/* ── Mandarin reading engine (new format) ──────────────────────
Output structure:

- zhBuildOverview: intro paragraph per format spec
- zhBuildBullets:  returns [{label, text}] with section headers
  embedded as HTML, plus a 建议 bullet list
  ─────────────────────────────────────────────────────────── */

function zhBuildOverview(cards, category) {
const ix  = (i) => DB.indexOf(cards[i]);
const c   = (i) => ‘<strong>’ + (ZH_CARD_NAMES[ix(i)] || cards[i].name) + ‘</strong>’;
const k   = (i) => ‘<em>’ + (ZH_KEYWORDS[ix(i)] || cards[i].keywords)[0] + ‘</em>’;

// Position labels
const POS = [‘当下’,‘阻碍’,‘上方’,‘根基’,‘过去’,‘未来’,‘自我’,‘环境’,‘希望与恐惧’,‘结果’];

// Build intro: state card + position + what it means directly
// Format: **CardName**在[position]位置，表示*keyword*。
let intro = ‘十张牌已落定。’;
intro += c(0) + ‘在’ + POS[0] + ‘位置，表示’ + k(0) + ‘。’;
intro += c(1) + ‘是主要阻碍，意味着’ + k(1) + ‘。’;
intro += c(5) + ‘在’ + POS[5] + ‘，’ + k(5) + ‘即将到来。’;
intro += c(9) + ‘指向最终结果——’ + k(9) + ‘。’;

if (category === ‘love’) {
intro += c(6) + ‘在’ + POS[6] + ‘，你目前是’ + k(6) + ‘的状态。’;
intro += c(7) + ‘在’ + POS[7] + ‘，周围的人带来’ + k(7) + ‘。’;
}
if (category === ‘wealth’) {
intro += c(3) + ‘在’ + POS[3] + ‘，你的财务基础是’ + k(3) + ‘。’;
intro += c(2) + ‘在’ + POS[2] + ‘，你的目标是’ + k(2) + ‘。’;
}

return intro;
}

function zhBuildBullets(cards, category) {
const ix  = (i) => DB.indexOf(cards[i]);
const c   = (i) => ‘<strong>’ + (ZH_CARD_NAMES[ix(i)] || cards[i].name) + ‘</strong>’;
const k   = (i) => ‘<em>’ + (ZH_KEYWORDS[ix(i)] || cards[i].keywords)[0] + ‘</em>’;
const k1  = (i) => ‘<em>’ + ((ZH_KEYWORDS[ix(i)] || cards[i].keywords)[1] || ‘’) + ‘</em>’;

// Derive suit-based characteristics for love / wealth
const selfSuit   = cards[6].id.split(’*’)[0];
const crownSuit  = cards[2].id.split(’*’)[0];
const rootSuit   = cards[3].id.split(’_’)[0];

// ── 建议 bullet list (共用) ──────────────────────────────────
// Derive 4 direct action verbs from the cards
const adviceVerbs = {
major:  ‘接受’, wands: ‘行动’, cups: ‘感受’, swords: ‘说出’, penta: ‘执行’
};
const presentSuit = cards[0].id.split(’*’)[0];
const futureSuit  = cards[5].id.split(’*’)[0];
const challengeSuit = cards[1].id.split(’*’)[0];
const outcomeSuit   = cards[9].id.split(’*’)[0];

// ── GENERAL ─────────────────────────────────────────────────
if (category === ‘general’) {
const stateText =
c(0) + ‘在当下位置。你现在处于’ + k(0) + ‘的状态。’ +
c(3) + ‘是你的根基，代表’ + k(3) + ‘。’;

```
const wealthText =
  c(3) + '在根基位置，你的物质基础是' + k(3) + '。' +
  c(2) + '在上方，你的财务目标是' + k(2) + '。' +
  c(1) + '是主要阻力，需要面对' + k(1) + '。';

const loveText =
  c(6) + '在自我位置，你带入关系的是' + k(6) + '。' +
  c(5) + '在未来，感情方向是' + k(5) + '。';

const adviceBullets =
  '• 停下来看清' + c(0) + '带来的' + k(0) + '<br>' +
  '• 面对' + c(1) + '代表的' + k(1) + '<br>' +
  '• 让' + c(4) + '的' + k(4) + '完成离去<br>' +
  '• 朝' + c(5) + '的方向走——' + k(5) + '<br>' +
  '• 像' + c(9) + '指示的那样——' + k(9);

return [
  { icon:'◈', label:'【当前状态】', text: stateText },
  { icon:'🪙', label:'【财富】',     text: wealthText },
  { icon:'◇', label:'【爱情】',     text: loveText },
  { icon:'☽', label:'【建议】',     text: adviceBullets },
];
```

}

// ── LOVE ────────────────────────────────────────────────────
if (category === ‘love’) {
const charMap = {
major:  ‘你是深思型的人。你在爱中需要深度和意义。’,
wands:  ‘你是行动型的人。你在爱中主动，热情。’,
cups:   ‘你是感受型的人。你在爱中细腻，容易受伤。’,
swords: ‘你是思考型的人。你需要诚实，不能接受欺骗。’,
penta:  ‘你是稳定型的人。你用行动表达爱，不善于言辞。’
};

```
const stateText =
  c(0) + '在当下，你的感情状态是' + k(0) + '。' +
  c(1) + '是阻碍，你需要面对' + k(1) + '。';

const loveDetail =
  c(6) + '在自我位置。' + (charMap[selfSuit] || '你有复杂的情感本质。') +
  c(7) + '在环境，周围带来' + k(7) + '。' +
  c(8) + '在希望与恐惧，你既想要又害怕' + k(8) + '。';

const adviceBullets =
  '• 停下来问自己：你真正想要的是什么<br>' +
  '• 面对' + c(1) + '——不要绕开' + k(1) + '<br>' +
  '• 让' + c(4) + '的过去完成<br>' +
  '• 像' + c(9) + '显示的那样——' + k(9) + '是可以达到的<br>' +
  '• 说出你真实的感受，不要表演';

return [
  { icon:'◇', label:'【当前状态】', text: stateText },
  { icon:'☽', label:'【爱情】',     text: loveDetail },
  { icon:'✦', label:'【建议】',     text: adviceBullets },
];
```

}

// ── WEALTH ──────────────────────────────────────────────────
if (category === ‘wealth’) {
const careerMap = {
major:  ‘领导、咨询、教育、或有影响力的工作。’,
wands:  ‘创业、媒体、创意产业、或品牌。’,
cups:   ‘医疗、教育、心理咨询、或服务业。’,
swords: ‘法律、科技、写作、或分析工作。’,
penta:  ‘金融、房地产、制造业、或手工艺。’
};
const bizMap = {
major:  ‘个人成长、教练、健康、或灵性服务。’,
wands:  ‘初创公司、数字媒体、或活动策划。’,
cups:   ‘健康、教育、或社群平台。’,
swords: ‘咨询、法律服务、或知识产品。’,
penta:  ‘房产、制造业、或餐饮。’
};

```
const stateText =
  c(0) + '在当下，你的财务状态是' + k(0) + '。' +
  c(1) + '是阻碍，是' + k(1) + '。' +
  c(3) + '是根基，代表' + k(3) + '。';

const wealthDetail =
  c(2) + '在上方，你的财务目标是' + k(2) + '。' +
  c(5) + '在未来，下一步会遇到' + k(5) + '。' +
  c(9) + '是结果——' + k(9) + '。';

const careerText =
  '职业方向：' + (careerMap[crownSuit] || '适合你的领域。') +
  '商业方向：' + (bizMap[rootSuit] || '建立实际价值的行业。');

const adviceBullets =
  '• 停下来核查' + c(3) + '的根基——' + k(3) + '<br>' +
  '• 面对' + c(1) + '——' + k(1) + '是真正的阻力<br>' +
  '• 让' + c(4) + '的旧方式结束<br>' +
  '• 朝' + c(2) + '的目标走——' + k(2) + '<br>' +
  '• 像' + c(9) + '显示的——' + k(9) + '是结果';

return [
  { icon:'🪙', label:'【当前状态】', text: stateText },
  { icon:'◈', label:'【财富】',     text: wealthDetail },
  { icon:'⊛', label:'【职业与商业】',text: careerText },
  { icon:'✦', label:'【建议】',     text: adviceBullets },
];
```

}

return [];
}

/* ── Toggle language ── *//* ── Toggle language ── */
function toggleLang() {
currentLang = currentLang === ‘en’ ? ‘zh’ : ‘en’;
applyLang();
}

/* ── Apply all UI translations ── */
function applyLang() {
const L   = LANG[currentLang];
const btn = document.getElementById(‘langToggle’);

// Toggle button state
btn.textContent = currentLang === ‘en’ ? ‘EN’ : ‘中文’;
btn.classList.toggle(‘zh’, currentLang === ‘zh’);

// Nav brand
document.querySelector(’.nav-brand span:not(.nav-brand-sym)’).textContent = L.brand;

// Nav links
const navR = document.getElementById(‘nav-reading’);
const navP = document.getElementById(‘nav-personal’);
const navLi= document.getElementById(‘nav-library’);
navR.querySelector(’.nav-label’).textContent  = L.nav_reading;
navP.querySelector(’.nav-label’).textContent  = L.nav_personal;
navLi.querySelector(’.nav-label’).textContent = L.nav_library;
navR.dataset.short  = L.nav_reading_short;
navP.dataset.short  = L.nav_personal_short;
navLi.dataset.short = L.nav_library_short;

// Phase 1 — shuffle
document.querySelector(’.intro-eyebrow’).textContent = L.eyebrow_spread;
document.querySelector(’.intro-title’).innerHTML     = L.intro_title;
document.querySelector(’.intro-sub’).textContent     = L.intro_sub;
document.querySelector(’.category-label’).textContent= L.cat_label;
document.querySelector(’#cat-general .cat-label’).textContent = L.cat_general;
document.querySelector(’#cat-love .cat-label’).textContent    = L.cat_love;
document.querySelector(’#cat-wealth .cat-label’).textContent  = L.cat_wealth;
document.getElementById(‘shuffleBtn’).textContent = L.shuffle_btn;

// Phase 2 — fan
const fanH = document.querySelector(’.fan-header’);
if (fanH) {
fanH.querySelector(’.eyebrow’).textContent = L.fan_eyebrow;
fanH.querySelector(‘h2’).innerHTML         = L.fan_title;
fanH.querySelector(‘p:last-child’).textContent = L.fan_sub;
}
document.querySelector(’.draw-pill-label’).textContent = L.drawn_label;

// Phase 3 — spread
const sH = document.querySelector(’.spread-header’);
if (sH) {
sH.querySelector(’.eyebrow’).textContent    = L.spread_eyebrow;
sH.querySelector(‘h2’).textContent          = L.spread_title;
sH.querySelector(‘p:last-child’).textContent= L.spread_sub;
}
const loadText = document.querySelector(’.reading-loading-text’);
if (loadText) loadText.textContent = L.loading_text;
const glance = document.querySelector(’.reading-section-label’);
if (glance) glance.textContent = L.at_a_glance;
const btnNew = document.querySelector(’.btn-out’);
if (btnNew) btnNew.textContent = L.btn_new;
const btnShr = document.querySelector(’.btn-pri’);
if (btnShr) btnShr.textContent = L.btn_share;
const rTitle = document.getElementById(‘readingBoxTitle’);
if (rTitle) rTitle.textContent = L.reading_box_title;

// Modal
document.querySelector(’.modal-mlabel’).textContent = L.modal_interp;
document.querySelector(’.modal-share’).textContent  = L.modal_share;

// Personal page
const persEy = document.querySelector(’.pers-eyebrow’);
if (persEy) {
// Replace only the text node, preserve ::after pseudo-element
const firstText = […persEy.childNodes].find(n => n.nodeType === 3);
if (firstText) firstText.textContent = L.pers_eyebrow;
else persEy.prepend(document.createTextNode(L.pers_eyebrow));
}
const persT = document.querySelector(’.pers-title’);
if (persT) persT.innerHTML = L.pers_title;
const persL = document.querySelector(’.pers-lead’);
if (persL) persL.textContent = L.pers_lead;
const availS = document.querySelector(’.avail-text strong’);
if (availS) availS.textContent = L.avail_strong;
const availSp= document.querySelector(’.avail-text span’);
if (availSp) availSp.textContent = L.avail_span;
const fName = document.querySelector(‘label[for=“fName”]’);
if (fName) fName.textContent = L.lbl_name;
const fEmail= document.querySelector(‘label[for=“fEmail”]’);
if (fEmail) fEmail.textContent = L.lbl_email;
const fQLbl = document.querySelector(‘label[for=“fQ”]’);
if (fQLbl) fQLbl.textContent = L.lbl_question;
const inpName = document.getElementById(‘fName’);
if (inpName) inpName.placeholder = L.ph_name;
const inpEmail= document.getElementById(‘fEmail’);
if (inpEmail) inpEmail.placeholder = L.ph_email;
const inpQ    = document.getElementById(‘fQ’);
if (inpQ) inpQ.placeholder = L.ph_question;
const hint = document.querySelector(’.p-hint’);
if (hint) hint.textContent = L.form_hint;
const sub  = document.querySelector(’.p-sub’);
if (sub) sub.textContent = L.form_submit;
const note = document.querySelector(’.p-note’);
if (note) note.textContent = L.form_note;
const okH = document.querySelector(’.p-ok h3’);
if (okH) okH.textContent = L.ok_title;
const okP = document.querySelector(’.p-ok p’);
if (okP) okP.textContent = L.ok_body;

// Library page
const libH = document.querySelector(’.lib-header h2’);
if (libH) libH.textContent = L.lib_title;
const libP = document.querySelector(’.lib-header p’);
if (libP) libP.textContent = L.lib_sub;
// Library filter buttons (by position)
const libBtns = document.querySelectorAll(’.lib-filter-btn’);
const libKeys = [‘lib_all’,‘lib_major’,‘lib_wands’,‘lib_cups’,‘lib_swords’,‘lib_penta’];
libBtns.forEach((b,i) => { if (libKeys[i]) b.textContent = L[libKeys[i]]; });
// Rebuild library grid with correct language if already on that page
const libGrid = document.getElementById(‘libGrid’);
if (libGrid && libGrid.children.length > 0) buildLibrary();
}

/* ============================================================
GESTURE SYSTEM
Three interactions:

1. SHAKE — DeviceMotion accelerometer triggers shuffle
1. DRAG  — touchmove across fan lifts cards the finger passes
1. HOLD  — lingering touch on a card (300ms) selects it
   without requiring a clean tap (more intentional feel)
   ============================================================ */

// ── 1. SHAKE TO SHUFFLE ──────────────────────────────────────
let _shakeLastTime  = 0;
let _shakeCooldown  = false;
let _shakeListening = false;

function startShakeListener() {
if (_shakeListening) return;

// iOS13+ requires permission
if (typeof DeviceMotionEvent !== ‘undefined’ &&
typeof DeviceMotionEvent.requestPermission === ‘function’) {
DeviceMotionEvent.requestPermission()
.then(state => {
if (state === ‘granted’) _attachShakeHandler();
})
.catch(() => {});
} else if (typeof DeviceMotionEvent !== ‘undefined’) {
_attachShakeHandler();
}
}

function _attachShakeHandler() {
_shakeListening = true;
const THRESHOLD = 18; // m/s² — firm shake required, not accidental movement
let   lastX = 0, lastY = 0, lastZ = 0;

window.addEventListener(‘devicemotion’, (e) => {
// Only active on shuffle phase
if (!document.getElementById(‘phase-shuffle’).classList.contains(‘active’)) return;
if (_shakeCooldown) return;

```
const a = e.accelerationIncludingGravity || e.acceleration;
if (!a) return;
const x = a.x || 0, y = a.y || 0, z = a.z || 0;
const delta = Math.abs(x - lastX) + Math.abs(y - lastY) + Math.abs(z - lastZ);
lastX = x; lastY = y; lastZ = z;

if (delta > THRESHOLD) {
  _shakeCooldown = true;
  setTimeout(() => _shakeCooldown = false, 1200);

  // Trigger the big shake animation then shuffle
  const pile = document.getElementById('deckPile');
  pile.classList.add('big-shaking');
  pile.addEventListener('animationend', () => {
    pile.classList.remove('big-shaking');
    doShuffle();
  }, {once: true});
}
```

});

// Update hint to confirm shake is active
const hint = document.getElementById(‘shakeHint’);
if (hint) hint.textContent = ‘shake your phone to shuffle — or tap the deck’;
}

// Request shake permission on first user interaction with the shuffle screen

// iOS needs a gesture to request permission — wire to first tap anywhere on shuffle phase
document.addEventListener(‘touchstart’, function iosTouchInit() {
startShakeListener();
document.removeEventListener(‘touchstart’, iosTouchInit);
}, {once: true, passive: true});

// ── 2 & 3. DRAG + HOLD ON FAN ────────────────────────────────
// These replace the simple click handler with a richer touch system.
// We attach ONE touchmove listener to the fan STAGE (not each card)
// to avoid the z-index thrash problem from per-card touch events.

let _holdTimer    = null;   // setTimeout reference for hold
let _holdSlot     = -1;     // which slot is being held
let _dragActive   = false;  // finger is moving (drag mode)
let _dragMoved    = false;  // finger moved more than threshold
const HOLD_MS     = 320;    // ms to hold before selection triggers
const DRAG_PX     = 8;      // px movement before it’s a drag not a hold
let _touchStartX  = 0;
let _touchStartY  = 0;
let _lastHovered  = -1;     // last card the finger was over (for drag lift)

function attachFanGestures(stage, cardData) {
// cardData: array of {slot, el, x, y, w, h, angle}
// Built once after cards are created in buildFan()

function cardAtPoint(cx, cy) {
// Find topmost non-drawn card whose bounding rect contains the point
// Walk backwards (highest z-index first)
for (let i = cardData.length - 1; i >= 0; i–) {
const d = cardData[i];
if (d.el.classList.contains(‘drawn’)) continue;
// Use elementFromPoint for accuracy — handles rotated cards
const rect = d.el.getBoundingClientRect();
if (cx >= rect.left && cx <= rect.right &&
cy >= rect.top  && cy <= rect.bottom) {
return d.slot;
}
}
return -1;
}

function clearHold() {
if (_holdTimer) { clearTimeout(_holdTimer); _holdTimer = null; }
if (_holdSlot >= 0) {
const el = document.getElementById(`fc-${_holdSlot}`);
if (el) el.classList.remove(‘holding’);
_holdSlot = -1;
}
}

function clearDragHover() {
if (_lastHovered >= 0) {
const el = document.getElementById(`fc-${_lastHovered}`);
if (el) el.classList.remove(‘finger-hover’);
_lastHovered = -1;
}
}

function triggerSelect(slot) {
clearHold();
clearDragHover();
// Burst animation
const el = document.getElementById(`fc-${slot}`);
if (el) {
el.classList.add(‘burst-play’);
setTimeout(() => el.classList.remove(‘burst-play’), 400);
}
onFanClick(slot);
// Hide the drag hint once first card chosen
const hint = document.getElementById(‘fanDragHint’);
if (hint) hint.classList.add(‘hide’);
}

stage.addEventListener(‘touchstart’, (e) => {
if (e.touches.length !== 1) return;
const t = e.touches[0];
_touchStartX = t.clientX;
_touchStartY = t.clientY;
_dragMoved   = false;
_dragActive  = false;

```
const slot = cardAtPoint(t.clientX, t.clientY);
if (slot < 0 || selectedSlots.includes(slot)) return;

// Start hold timer
_holdSlot = slot;
const holdEl = document.getElementById(`fc-${slot}`);
if (holdEl) holdEl.classList.add('holding');

_holdTimer = setTimeout(() => {
  if (_holdSlot === slot && !_dragMoved) {
    triggerSelect(slot);
  }
}, HOLD_MS);
```

}, {passive: true});

stage.addEventListener(‘touchmove’, (e) => {
if (e.touches.length !== 1) return;
const t = e.touches[0];
const dx = t.clientX - _touchStartX;
const dy = t.clientY - _touchStartY;
const dist = Math.sqrt(dx*dx + dy*dy);

```
if (dist > DRAG_PX) {
  _dragMoved  = true;
  _dragActive = true;
  // Cancel the hold if finger moved
  if (_holdTimer) { clearTimeout(_holdTimer); _holdTimer = null; }
  if (_holdSlot >= 0) {
    const el = document.getElementById(`fc-${_holdSlot}`);
    if (el) el.classList.remove('holding');
    _holdSlot = -1;
  }
}

if (!_dragActive) return;

// Lift card under finger, drop previous
const slot = cardAtPoint(t.clientX, t.clientY);

if (slot !== _lastHovered) {
  clearDragHover();
  if (slot >= 0 && !selectedSlots.includes(slot)) {
    const el = document.getElementById(`fc-${slot}`);
    if (el) el.classList.add('finger-hover');
    _lastHovered = slot;
  }
}
```

}, {passive: true});

stage.addEventListener(‘touchend’, (e) => {
const t = e.changedTouches[0];

```
if (!_dragMoved) {
  // Clean tap — use existing click handler (already on each card)
  clearHold();
  clearDragHover();
  return;
}

// Drag ended — if finger lifted over a card, select it
if (_lastHovered >= 0 && !selectedSlots.includes(_lastHovered)) {
  triggerSelect(_lastHovered);
}
clearDragHover();
clearHold();
_dragActive = false;
_dragMoved  = false;
```

}, {passive: true});

stage.addEventListener(‘touchcancel’, () => {
clearHold();
clearDragHover();
_dragActive = false;
_dragMoved  = false;
}, {passive: true});
}

/* ============================================================
FEATURE 1 — URL STATE PERSISTENCE
─────────────────────────────────────────────────────────
When a reading is complete the URL updates to:
?cards=3,45,22,7,61,18,72,0,34,55&cat=general

The 10 numbers are the DB indices of the drawn cards in
position order (0–77). Category is also stored.

On page load, if ?cards= is present the app reconstructs
that exact reading, bypassing the landing page entirely.
============================================================ */

/* Called after the spread is built — write state into the URL */
function pushReadingToURL() {
const cardIndices = assignedCards.map(card => DB.indexOf(card)).join(’,’);
const cat         = selectedCategory || ‘general’;
const url         = new URL(window.location.href);
url.searchParams.set(‘cards’, cardIndices);
url.searchParams.set(‘cat’,   cat);
// Replace so the back button still works cleanly
history.replaceState({ cards: cardIndices, cat }, ‘’, url.toString());
}

/* Called on DOMContentLoaded — read ?cards= and reconstruct */
function restoreReadingFromURL() {
const params = new URLSearchParams(window.location.search);
const raw    = params.get(‘cards’);
const cat    = params.get(‘cat’) || ‘general’;

if (!raw) return false; // no shared reading in URL

const indices = raw.split(’,’).map(Number);

// Validate: must be exactly 10 numbers, all in range 0–77
if (indices.length !== 10) return false;
if (indices.some(n => isNaN(n) || n < 0 || n > 77)) return false;

// Reconstruct state
assignedCards    = indices.map(i => DB[i]);
shuffledDeck     = indices.slice(); // minimal stand-in — not needed further
selectedSlots    = indices.map((_, i) => i);
selectCategory(cat);

// Skip all phases, go straight to spread
document.body.classList.add(‘scrollable’);
showPage(‘reading’);
goPhase(‘spread’);

// Wait one frame so the DOM is visible before building
requestAnimationFrame(() => {
buildCross();
buildParagraph();
window.scrollTo({ top: 0, behavior: ‘instant’ });
// Show a banner so the receiver knows this is a shared reading
showSharedBanner();
});

return true; // reading was restored
}

function showSharedBanner() {
// Inject a one-time “Shared Reading” notice above the spread header
const header = document.querySelector(’.spread-header’);
if (!header || document.getElementById(‘sharedBanner’)) return;
const banner = document.createElement(‘div’);
banner.id = ‘sharedBanner’;
banner.style.cssText =
‘text-align:center;padding:10px 20px 0;font-family:'Cormorant Garamond',serif;’ +
‘font-size:.9rem;font-style:italic;color:var(–text-muted);opacity:.8;’;
banner.textContent = ‘✦ Someone shared this reading with you’;
header.parentNode.insertBefore(banner, header);
}

/* ============================================================
FEATURE 2 — CAPTURE AS IMAGE
─────────────────────────────────────────────────────────
Pure Canvas approach — no external library needed.
Draws the Celtic Cross card grid + reading text onto a
canvas sized for Instagram Stories (1080 × 1920px).

Branding:
Background  #1a0e0e  (Eclipse / –bg-primary)
Accent      #d4722a  (Sunbeam / –accent-orange)
Text light  #f2ddc8  (–text-primary)
Text dim    #c9a882  (–text-secondary)
Border      rgba(232,180,138,.35)
============================================================ */

async function captureReading() {
if (!assignedCards.length) {
showToast(‘Complete a reading first’);
return;
}

showToast(‘Preparing image…’);

// Canvas dimensions — Instagram Stories ratio 9:16
const W = 1080;
const H = 1920;

const canvas = document.createElement(‘canvas’);
canvas.width  = W;
canvas.height = H;
const ctx = canvas.getContext(‘2d’);

// ── Background ──────────────────────────────────────────────
const bg = ctx.createLinearGradient(0, 0, W, H);
bg.addColorStop(0,   ‘#1a0e0e’);
bg.addColorStop(0.5, ‘#231210’);
bg.addColorStop(1,   ‘#1a0e0e’);
ctx.fillStyle = bg;
ctx.fillRect(0, 0, W, H);

// Ambient glow — top left
const glow1 = ctx.createRadialGradient(W * 0.2, H * 0.08, 0, W * 0.2, H * 0.08, W * 0.5);
glow1.addColorStop(0, ‘rgba(139,44,44,0.22)’);
glow1.addColorStop(1, ‘transparent’);
ctx.fillStyle = glow1;
ctx.fillRect(0, 0, W, H);

// Ambient glow — bottom right
const glow2 = ctx.createRadialGradient(W * 0.8, H * 0.92, 0, W * 0.8, H * 0.92, W * 0.45);
glow2.addColorStop(0, ‘rgba(212,114,42,0.14)’);
glow2.addColorStop(1, ‘transparent’);
ctx.fillStyle = glow2;
ctx.fillRect(0, 0, W, H);

// ── Header ──────────────────────────────────────────────────
ctx.textAlign = ‘center’;

// Moon symbol
ctx.fillStyle = ‘#d4722a’;
ctx.font      = ‘52px serif’;
ctx.fillText(‘☽’, W / 2, 90);

// Brand name
ctx.fillStyle = ‘#e8b48a’;
ctx.font      = ‘bold 56px serif’;
ctx.fillText(‘THE ARCANA’, W / 2, 162);

// Eyebrow
ctx.fillStyle = ‘#d4722a’;
ctx.font      = ‘32px sans-serif’;
ctx.fillText(‘CELTIC CROSS READING’, W / 2, 210);

// Divider line
ctx.strokeStyle = ‘rgba(232,180,138,0.3)’;
ctx.lineWidth   = 1;
ctx.beginPath();
ctx.moveTo(100, 232);
ctx.lineTo(W - 100, 232);
ctx.stroke();

// ── Celtic Cross Grid ────────────────────────────────────────
// Layout mirrors the on-screen grid: 6 cols × 5 rows
const CARD_W  = 120;
const CARD_H  = 168;
const GAP     = 16;
const GRID_W  = 6 * CARD_W + 5 * GAP;
const GRID_H  = 5 * CARD_H + 4 * GAP;
const GRID_X  = Math.round((W - GRID_W) / 2);
const GRID_Y  = 260;

// col/row → pixel top-left
function cellXY(col, row) { // col/row 1-indexed
return [
GRID_X + (col - 1) * (CARD_W + GAP),
GRID_Y + (row - 1) * (CARD_H + GAP),
];
}

// Card positions: [posIdx, col, row, rotated]
const layout = [
[0, 3, 3, false],
[1, 3, 3, true ],
[2, 3, 2, false],
[3, 3, 4, false],
[4, 2, 3, false],
[5, 4, 3, false],
[6, 6, 5, false],
[7, 6, 4, false],
[8, 6, 3, false],
[9, 6, 2, false],
];

// Draw a single card face
function drawCard(x, y, w, h, card, posLabel, rotated, ctx) {
ctx.save();
if (rotated) {
// Rotate 90° around card centre
ctx.translate(x + w / 2, y + h / 2);
ctx.rotate(Math.PI / 2);
ctx.translate(-(x + w / 2), -(y + h / 2));
}

```
// Card background
const cg = ctx.createLinearGradient(x, y, x + w, y + h);
cg.addColorStop(0, '#2a1410');
cg.addColorStop(1, '#1f1210');
ctx.fillStyle = cg;
_roundRect(ctx, x, y, w, h, 8);
ctx.fill();

// Border
ctx.strokeStyle = 'rgba(232,180,138,0.38)';
ctx.lineWidth   = 1.5;
_roundRect(ctx, x, y, w, h, 8);
ctx.stroke();

// Symbol
ctx.fillStyle  = 'rgba(232,180,138,0.7)';
ctx.font       = '44px serif';
ctx.textAlign  = 'center';
ctx.textBaseline = 'middle';
ctx.fillText(card.symbol || '✦', x + w / 2, y + h / 2 - 16);

// Card name — truncated
ctx.font      = 'bold 18px serif';
ctx.fillStyle = '#e8b48a';
ctx.textBaseline = 'alphabetic';
const name = card.name.length > 14 ? card.name.slice(0, 13) + '…' : card.name;
ctx.fillText(name, x + w / 2, y + h - 22);

// Position label at very bottom
ctx.font      = '14px sans-serif';
ctx.fillStyle = 'rgba(232,180,138,0.4)';
ctx.fillText(posLabel, x + w / 2, y + h - 8);

ctx.restore();
```

}

// Helper: rounded rectangle path
function _roundRect(ctx, x, y, w, h, r) {
ctx.beginPath();
ctx.moveTo(x + r, y);
ctx.lineTo(x + w - r, y);
ctx.arcTo(x + w, y, x + w, y + r, r);
ctx.lineTo(x + w, y + h - r);
ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
ctx.lineTo(x + r, y + h);
ctx.arcTo(x, y + h, x, y + h - r, r);
ctx.lineTo(x, y + r);
ctx.arcTo(x, y, x + r, y, r);
ctx.closePath();
}

const posLabels = POSITIONS.map(p => p.label);

layout.forEach(([pi, col, row, rotated]) => {
const [cx, cy] = cellXY(col, row);
const card     = assignedCards[pi];
const label    = currentLang === ‘zh’
? ZH_POSITIONS[pi].label
: posLabels[pi];
drawCard(cx, cy, CARD_W, CARD_H, card, label, rotated, ctx);
});

// ── Divider ──────────────────────────────────────────────────
const divY = GRID_Y + GRID_H + 36;
ctx.strokeStyle = ‘rgba(232,180,138,0.2)’;
ctx.lineWidth   = 1;
ctx.beginPath();
ctx.moveTo(80, divY);
ctx.lineTo(W - 80, divY);
ctx.stroke();

// ── Reading text ─────────────────────────────────────────────
const cat         = selectedCategory || ‘general’;
const catLabels   = { general: ‘General Reading’, love: ‘Love Reading’, wealth: ‘Wealth Reading’ };
const zhCatLabels = { general: ‘综合解读’, love: ‘感情解读’, wealth: ‘财富解读’ };
const catLabel    = currentLang === ‘zh’ ? zhCatLabels[cat] : catLabels[cat];

ctx.textAlign    = ‘center’;
ctx.fillStyle    = ‘#d4722a’;
ctx.font         = ‘30px sans-serif’;
ctx.fillText(catLabel.toUpperCase(), W / 2, divY + 48);

// Draw first 3 cards summary — card name + position + keyword
const summaryY = divY + 90;
const lineH    = 58;
const keyCards = [
{ pi: 0, prefix: currentLang === ‘zh’ ? ‘当下’ : ‘Present’ },
{ pi: 1, prefix: currentLang === ‘zh’ ? ‘阻碍’ : ‘Challenge’ },
{ pi: 9, prefix: currentLang === ‘zh’ ? ‘结果’ : ‘Outcome’ },
];

keyCards.forEach(({ pi, prefix }, i) => {
const card  = assignedCards[pi];
const kwIdx = DB.indexOf(card);
const kw    = currentLang === ‘zh’
? (ZH_KEYWORDS[kwIdx] || card.keywords)[0]
: card.keywords[0];
const name  = currentLang === ‘zh’
? (ZH_CARD_NAMES[kwIdx] || card.name)
: card.name;

```
const rowY = summaryY + i * lineH;

// Prefix label
ctx.textAlign = 'left';
ctx.fillStyle = 'rgba(232,180,138,0.45)';
ctx.font      = '24px sans-serif';
ctx.fillText(prefix, 90, rowY);

// Card name
ctx.fillStyle  = '#e8b48a';
ctx.font       = 'bold 30px serif';
ctx.fillText(name, 90, rowY + 28);

// Keyword
ctx.fillStyle  = '#c9a882';
ctx.font       = 'italic 24px serif';
ctx.textAlign  = 'right';
ctx.fillText(kw, W - 90, rowY + 28);
```

});

// ── Footer ───────────────────────────────────────────────────
const footY = H - 80;
ctx.strokeStyle = ‘rgba(232,180,138,0.2)’;
ctx.lineWidth   = 1;
ctx.beginPath();
ctx.moveTo(80, footY - 24);
ctx.lineTo(W - 80, footY - 24);
ctx.stroke();

ctx.textAlign  = ‘center’;
ctx.fillStyle  = ‘rgba(232,180,138,0.35)’;
ctx.font       = ‘26px sans-serif’;
ctx.fillText(‘the-arcana.netlify.app’, W / 2, footY + 8);
ctx.font       = ‘22px serif’;
ctx.fillText(‘✦  Get your own free reading’, W / 2, footY + 40);

// ── Export ───────────────────────────────────────────────────
canvas.toBlob(blob => {
if (!blob) { showToast(‘Could not create image’); return; }

```
const url  = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href     = url;
link.download = 'arcana-reading.png';
link.click();

// iOS Safari: also try Web Share with files (iOS 15+)
if (navigator.canShare && navigator.canShare({ files: [new File([blob], 'arcana-reading.png', { type: 'image/png' })] })) {
  const file = new File([blob], 'arcana-reading.png', { type: 'image/png' });
  navigator.share({ files: [file], title: 'My Arcana Reading' })
    .catch(() => {}); // silently ignore if user cancels
}

setTimeout(() => URL.revokeObjectURL(url), 10000);
showToast('Image saved ✦');
```

}, ‘image/png’);
}

/* ============================================================
BOOT — single DOMContentLoaded, guaranteed execution order:

1. Apply patches (all function reassignments happen here,
   after every function is defined and hoisted)
1. Init UI state
1. Restore shared reading from URL if present
   ============================================================ */
   document.addEventListener(‘DOMContentLoaded’, () => {

/* ── PATCH 1: buildParagraph — ZH engine ── */
const _origBuildParagraph = buildParagraph;
buildParagraph = function () {
if (currentLang !== ‘zh’) { _origBuildParagraph(); return; }
const cat      = selectedCategory || ‘general’;
const catLabel = {
general: LANG.zh.reading_general,
love:    LANG.zh.reading_love,
wealth:  LANG.zh.reading_wealth
};
document.getElementById(‘readingBoxTitle’).textContent =
catLabel[cat] || LANG.zh.reading_box_title;
document.getElementById(‘readingLoading’).style.display = ‘flex’;
document.getElementById(‘readingPara’).innerHTML        = ‘’;
document.getElementById(‘readingBullets’).style.display = ‘none’;
setTimeout(() => {
document.getElementById(‘readingLoading’).style.display = ‘none’;
const gl = document.querySelector(’#readingBullets .reading-section-label’);
if (gl) gl.style.display = ‘none’;
const overview = ZH_CAT_OPEN[cat] +
zhBuildOverview(assignedCards, cat) +
ZH_CAT_CLOSE[cat];
const bullets  = zhBuildBullets(assignedCards, cat);
typeText(document.getElementById(‘readingPara’), overview, () => {
renderBullets(bullets);
});
}, 900);
};

/* ── PATCH 2: buildSpread — push URL after spread built ── */
const _origBuildSpread = buildSpread;
buildSpread = function () {
_origBuildSpread();
pushReadingToURL();
};

/* ── PATCH 3: doReset — clear URL on reset ── */
const _origDoReset = doReset;
doReset = function () {
_origDoReset();
history.replaceState({}, ‘’, window.location.pathname);
};

/* ── PATCH 4: shareApp — always share the reading URL ── */
shareApp = function () {
const url  = window.location.href;
const data = {
title: ‘The Arcana — My Tarot Reading’,
text:  ‘I drew a Celtic Cross spread ✦ See my reading:’,
url,
};
if (navigator.share) {
navigator.share(data).catch(() => {});
} else {
navigator.clipboard.writeText(url)
.then(()  => showToast(‘Reading link copied ✦’))
.catch(()  => showToast(url));
}
};

/* ── INIT ── */
setupTheme();
selectCategory(‘general’);
applyLang();
startShakeListener();
if (‘serviceWorker’ in navigator) {
navigator.serviceWorker.register(’/sw.js’).catch(() => {});
}

/* ── RESTORE shared reading from URL (runs last) ── */
restoreReadingFromURL();

});