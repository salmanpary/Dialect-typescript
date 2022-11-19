import React from "react";
import Image from "next/image";
const AddressCard = () => {
  return (
    <>
      <div>
        <div className="flex h-auto lg:h-auto lg:gap-6 flex-wrap pt-10 justify-center items-center">
          <div>
            <a href="https://g.page/zartek?share">
              <Image
                src="/images/zartekmap.png"
                alt=""
                width={700}
                height={380}
                className="md:w-auto"
                quality={100}
              />
            </a>
          </div>

          <div className="bg-darkblue text-white sm:text-xl text-base rounded-xl px-7 py-10 flex flex-col gap-3 max-h-80 lg:ml-[-30px] mt-10 lg:mt-0">
            <div>Kerala Technology Innovation Zone</div>
            <div>Kinfra Hi-Tech Park,Kalamassery,Kochi,India</div>
            <div className="flex gap-4">
              <Image src="/images/call.png" alt="" width={30} height={30} />
              <div className="md:pt-1">(+91) 7736226886</div>
            </div>
            <div className="flex gap-5">
              <Image src="/images/message.png" alt="" width={30} height={30} />
              <div className="pt-1">info@zartek.in</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressCard;
