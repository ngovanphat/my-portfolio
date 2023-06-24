interface LoadingProps {
  size: number;
}

export const Loading: React.FC<LoadingProps> = ({ size }) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="animate-spin"
      >
        <div
          className="h-full w-full border-4 border-t-[#E8582A]
           border-b-[#E8582A] rounded-[50%]"
        ></div>
      </div>
    </div>
  );
};
