import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
import Typewriter from "typewriter-effect";
import { profile } from "../assets";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      <div>
        <div className="pt-6">
          <h1 className="font-epilogue font-semibold text-[25px] text-black text-left">
            Profile
          </h1>
        </div>
        <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px] ">
          <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-white cursor-pointer">
            <img
              src={profile}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
          <div>
            <h4 className="font-epilogue font-semibold text-[14px] text-black break-all pt-2">
              {address}
            </h4>
            <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]"></p>
          </div>
        </div>
        <div className="pt-5">
          <DisplayCampaigns
            title="Campaigns Created"
            isLoading={isLoading}
            campaigns={campaigns}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
