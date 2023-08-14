import Image from "next/image";
export default function Screen3() {
    return (
        <div className="min-h-screen flex justify-center items-center border-b">
            <div className="w-[85%] h-[80%] mx-auto my-auto ">
                <div className="w-full h-[20%] flex flex-col items-center justify-center">
                    <h6 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-700">
                        Products
                    </h6>
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        Check What We Have
                    </h2>
                </div>
                <div className="w-full h-[80%] flex">
                    <div className=" w-[30%] h-full">
                        <div className=" h-[90%] w-[90%] mx-[5%] mt-[5%] hover:mx-0 hover:my-0 hover:w-[100%] hover:h-[100%] transition-all duration-500 ease-in-out">
                            <div className="bg-slate-300 h-[80%] w-full ">
                                <Image src={'/model/MMODEL (6).png'} width={600} height={600} alt="sc4i" style={{ width: '100%', height: '100%'}} className="mt-">
                                </Image>
                            </div>
                            <div className="w-full h-[20%] mt-[3%]">
                                <h6 className="scroll-m-20 text-xs  md:text-lg font-bold tracking-[0.15em] leading-9 ml-[4%] flex">
                                    FLEX SWEATSHIRTS
                                </h6>
                                <h6 className="scroll-m-20 text-xs  md:text-lg font-bold tracking-[0.15em] leading-9 ml-[4%] flex">
                                    $190.00
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-auto w-[30%] h-full">
                    <div className=" h-[90%] w-[90%] mx-[5%] mt-[5%] hover:mx-0 hover:my-0 hover:w-[100%] hover:h-[100%] transition-all duration-500 ease-in-out">
                            <div className="bg-slate-300 h-[80%] w-full ">
                                <Image src={'/model/MMODEL (7).png'} width={600} height={600} alt="sc4i" style={{ width: '100%', height: '100%'}} className="mt-">
                                </Image>
                            </div>
                            <div className="w-full h-[20%] mt-[3%]">
                                <h6 className="scroll-m-20 text-xs  md:text-lg font-bold tracking-[0.15em] leading-9 ml-[4%] flex">
                                    FLEX SWEATSHIRTS
                                </h6>
                                <h6 className="scroll-m-20 text-xs  md:text-lg font-bold tracking-[0.15em] leading-9 ml-[4%] flex">
                                    $180.00
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[30%] h-full">
                    <div className=" h-[90%] w-[90%] mx-[5%] mt-[5%] hover:mx-0 hover:my-0 hover:w-[100%] hover:h-[100%] transition-all duration-500 ease-in-out">
                            <div className="bg-slate-300 h-[80%] w-full ">
                                <Image src={'/model/MMODEL (5).png'} width={600} height={600} alt="sc4i" style={{ width: '100%', height: '100%'}} className="mt-">
                                </Image>
                            </div>
                            <div className="w-full h-[20%] mt-[3%]">
                                <h6 className="scroll-m-20 text-xs  md:text-lg font-bold tracking-[0.15em] leading-9 ml-[4%] flex">
                                    FLEX SWEATSHIRTS
                                </h6>
                                <h6 className="scroll-m-20 text-xs  md:text-lg font-bold tracking-[0.15em] leading-9 ml-[4%] flex">
                                    $170.00
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}