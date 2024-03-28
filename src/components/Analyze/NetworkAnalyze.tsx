import Watch from "../svgs/Watch";
import Database from "../svgs/Database";
import Globe from "../svgs/Globe";
import Logo from "../svgs/Logo";

interface NetworkAnalyzeProps {
  className?: string;
}

const NetworkAnalyze: React.FC<NetworkAnalyzeProps> = ({ className }) => {
  return (
    <div
      className={`bg-white rounded-[10px] py-2.5 px-7 md:px-[35px] ${
        className ?? ""
      }`}
    >
      <div className="flex max-md:flex-col border-b border-gray-300">
        <div className="pt-4 h-[90px] md:h-[110px] max-md:border-b md:border-r border-gray-300 w-full">
          <div className="flex items-center">
            <Logo className="text-orange w-[22px] md:w-[27px] h-[17px] md:h-[22px]" />
            <span className="ml-3 text-sm md:text-lg leading-[107%]">
              Mazze Price
            </span>
          </div>
          <div className="flex items-center mt-2 md:mt-[15px] space-x-3">
            <span className="md:text-xl font-bold leading-[107%]">$1.25</span>
            <span className="md:text-lg text-gray-500">0.003 ETH</span>
            <span className="md:text-lg text-green">0.003 ETH</span>
          </div>
        </div>
        <div className="pt-4 md:pl-[35px] h-[90px] md:h-[110px] w-full">
          <div className="flex items-center">
            <Database className="text-orange max-md:w-[20px] max-md:h-[20px]" />
            <span className="ml-3 text-sm md:text-lg leading-[107%]">
              Transactions
            </span>
          </div>
          <div className="flex items-center mt-2 md:mt-[15px] space-x-3">
            <span className="md:text-xl font-bold leading-[107%]">1234.2M</span>
            <span className="md:text-lg text-gray-500">57 TPS</span>
          </div>
        </div>
      </div>
      <div className="flex max-md:flex-col">
        <div className="pt-4 md:pt-6 h-[90px] md:h-[110px] max-md:border-b md:border-r border-gray-300 w-full">
          <div className="flex items-center">
            <Globe className="text-orange max-md:w-[20px] max-md:h-[20px]" />
            <span className="ml-3 text-sm md:text-lg leading-[107%]">
              Mazze MC on MazzeScan
            </span>
          </div>
          <div className="flex items-center mt-2 md:mt-[15px] space-x-3">
            <span className="md:text-xl font-bold leading-[107%]">$1.25</span>
            <span className="md:text-lg text-gray-500">0.003 ETH</span>
            <span className="md:text-lg text-green">0.003 ETH</span>
          </div>
        </div>
        <div className="pt-4 md:pt-6 md:pl-[35px] h-[90px] md:h-[110px] w-full">
          <div className="flex items-center">
            <Watch className="text-orange max-md:w-[20px] max-md:h-[20px]" />
            <span className="ml-3 text-sm md:text-lg leading-[107%]">
              Latest block
            </span>
          </div>
          <div className="flex items-center mt-2 md:mt-[15px] space-x-3">
            <span className="md:text-xl font-bold leading-[107%]">
              3701235152
            </span>
            <span className="md:text-lg text-gray-500">2.0s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkAnalyze;
