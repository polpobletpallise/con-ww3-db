import { FaceSlightlyFrowning, FaceSlightlySmiling } from "lucide-react";
import { FaUserTie } from "react-icons/fa6";
import { GiCrossedSabres, GiPeaceDove } from "react-icons/gi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

export default function BeginnerIntro() {
    return (
        <div
        className={
            // <a> styles
            "[&_a]:underline [&_a:hover]:text-foreground [&_a]:transition " +
            ""
        }
        >
            <header>
                <h1>Beginner Intro</h1>
            </header>

            <main className="flex max-w-7xl mx-auto p-10 gap-10 flex-col">

                {/* MORALE */}
                <section>
                    <div className="mb-3">
                        <h3 className="text-xl font-medium tracking-wide">Morale</h3>
                        <p className="italic text-muted-foreground">It affects your <a href="/production">production</a>, <a href="/units" className="underline hover:text-foreground transition">troop</a> mobilization, and reduces the risk of <a href="/insurgents" className="underline hover:text-foreground transition">insurgency</a>. Warcrimes can influence all your <a href="/provinces" className="underline hover:text-foreground transition">provinces'</a> morale at the same time.</p>
                    </div>

                    <div className="flex flex-col gap-2 ml-2">
                        <div className="flex gap-2">
                            <FaceSlightlySmiling />
                            <p>34% and above</p>
                        </div>
                        <div className="flex gap-2">
                            <FaceSlightlyFrowning />
                            <p>-34% (insurgencies can spawn)</p>
                        </div>
                    </div>
                </section>

                {/* DIPLOMACY */}
                <section>
                    <div className="mb-3">
                        <h3 className="text-xl font-medium tracking-wide">Diplomacy</h3>
                        <p className="italic text-muted-foreground">Keep an eye on the <a href="/news">News</a>.</p>
                    </div>

                    <div className="flex flex-col gap-2 ml-2">
                        <div className="flex gap-2">
                            <FaUserTie color="#426E87" size={24} />
                            <p><b>Shared Intelligence</b>: Shows other country's units exact position, composition and secret buildings. <i>Right of Way</i> is activaded too. (Only available for coalition allies)</p>
                        </div>
                        <div className="flex gap-2">
                            <HiOutlineSwitchHorizontal color="#52845F" size={24}  />
                            <p><b>Right of Way</b>: Allows the player to move freely on other's land.</p>
                        </div>
                        <div className="flex gap-2">
                            <GiPeaceDove color="#52845F" size={24} />
                            <p><b>Peace</b>: No war declared. (Default option for each country)</p>
                        </div>
                        <div className="flex gap-2">
                            <GiCrossedSabres color="#B3575B" size={24} />
                            <p><b>War</b>: Your country and other country are enganged in a war. It can decrese morale.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}