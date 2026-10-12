STATE(Dukaan ka saman)--> state o data ya cheez hai jo bdlti rhti hai aur jiske badlne se screen par asar padta hai.   
jaise dukan mein sabzi khatam ho gayi hai nayi sabzi aayi. State badlegi, toh scrren(dukaan) par naya saman dikhega.
--------------------------------------------------------------------------------------------------

HOOKS(dukan ke workers/TOOLS)-->  Hooks woh special function(tools) hain jo aapkok React ke functional components ke andar state aur baki features ko use karne ki tqaut deta hai.
State ko banane aur handle krne ke liye ham useState naam ke hook ka use krte hain.


1. useState — (Screen par dikhne wala badlaav)

• Aasan Bhasha Mein: Yeh dukan ke counter jaisa hai. Jab bhi iski value badlegi, screen apne aap refresh (re-render) ho jayegi taaki user ko nayi value dikhe.
• Kab use karein? Har us cheez ke liye jo screen par dikhni hai. Jaise: Kaun sa button click hua, user ne form mein kya likha, ya dark mode on hai ya off.

2. useRef — (Background ki Diary)

• Aasan Bhasha Mein: Yeh dukan ke manager ki ek private diary hai. Isme likhi baatein manager ko yaad rehti hain, par isse dukan ki screen par koi farq nahi padta.
• Kab use karein? Kisi HTML element ko seedhe pakadne ke liye (jaise kisi input box par cursor laana) ya background mein timer ID save karne ke liye.

3. useEffect — (Baahar ke kaam / Side Effects)

• Aasan Bhasha Mein: Yeh dukan ke us ladke jaisa hai jo tab kaam karta hai jab dukan khulti hai ya dukan mein koi bada badlaav hota hai.
• Kab use karein? Jab component screen par pehli baar aaye (componentDidMount), tab database ya API se data mangwane ke liye, ya koi timer shuru karne ke liye.

4. useContext — (Global Announcement / Mike)

• Aasan Bhasha Mein: Agar dukan ke malik ko saare workers ko ek sath koi baat batani ho, toh woh har ek ke paas jaakar bolne ki jagah mike par bol deta hai. useContext wahi mike hai.
• Kab use karein? Jab koi data (jaise User login information ya Theme setting) aapko bina har jagah pass kiye, app ke har ek component tak pahunchani ho.

5. useMemo — (Purana result yaad rakhna / Calculation)

• Aasan Bhasha Mein: Agar dukan mein roz ek hi bada hisaab-kitaab karna padta hai jisme 1 ghanta lagta hai, toh aap use ek kaagaz par likh kar rakh lete hain. Jab tak number nahi badlenge, aap wahi purana result dekh lenge, dobara calculation nahi karenge.
• Kab use karein? Jab koi bahut bada ya bhaari calculation ho, aur aap chahte hain ki bina wajah har render par woh calculation dobara na chale.

6. useCallback — (Function ko yaad rakhna)

• Aasan Bhasha Mein: Yeh bilkul useMemo jaisa hai, par jahan useMemo kisi value/result ko yaad rakhta hai, useCallback poore ke poore function (kaam karne ke tarike) ko yaad rakhta hai taaki har render par naya function na bane.
• Kab use karein? Performance behtar karne ke liye, jab aap kisi function ko niche wale (child) components mein pass kar rahe hon.


