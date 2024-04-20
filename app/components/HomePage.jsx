"use client"
import { MessagesSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const HomePage = () => {
    const router=useRouter()
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className=" flex items-center h-[85vh] w-[75vw] gap-15 bg-slate-50 rounded-[24px]">
                <div className="flex flex-col justify-center bg-[#141718] h-[75vh] z-10 overflow-hidden w-[45%] rounded-[16px] ml-8 p-7 gap-5">
                    <div className="border border-slate-50 absolute top-20 z-5 left-40 w-[10vw] h-[10vh] rounded-[100%] bg-[#343F45]"></div>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <MessagesSquare style={{height:'80px',width:"80px"}}/>
                        </div>
                        <div>
                            <p className="text-slate-50 font-bold text-3xl">ChatBot System</p>
                        </div>
                    </div>
                    <div className="flex  flex-col items-center justify-center gap-2">
                        <div>
                            <p className="text-xl text-slate-50 font-semibold">Enchance Your Document Experience</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-50 font-medium">
                            Your team is the heartbeat of your retail business. Train them to embody your brand and deliver a unified experience at every customer interaction. Foster effective communication between your online and offline teams. Embrace technology to provide real-time updates on inventory, promotions, and customer interactions for seamless coordination.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col justify-center items-center gap-5 h-[75vh]">
                    <div className="flex flex-col items-center gap-4">
                        <div className="mb-5">
                            <MessagesSquare style={{height:'70px',width:"70px",color:'#43B2E5'}}/>
                        </div>
                        <div>
                            <p className="text-black font-bold text-2xl">Sign Up To ChatBot</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-3 w-[100%]">
                       <div>
                            <input type="number" className="h-[40px] rounded-lg   bg-[#DADDE1] " placeholder="First name" />
                      </div>
                      <div>
                            <input type="number" className="h-[40px] rounded-lg  bg-[#DADDE1] " placeholder="First name" />
                        </div>
                        <div>
                            <input type="number" className="h-[40px] rounded-lg  bg-[#DADDE1] "  placeholder="First name"/>
                        </div>
                        <div>
                            <input type="number" className="h-[40px] rounded-lg  bg-[#DADDE1] "  placeholder="First name"/>
                        </div>
                        <div>
                            <button type="submit" onClick={()=>router.push('/chat')} className="bg-[#42B2E4] shadow-lg shadow-cyan-500/50 h-[40px] px-20 rounded-lg" >Continue</button>
                        </div>
                        <div>
                            <p className="text-[#000] text-[10px] font-semibold">By pressing Sign Up you agree to the Business Associate Agreement <span className="text-[#43B2E5]">Term of use and Privacy Policy </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage ;