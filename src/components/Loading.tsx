import loading from "../assets/image/loading/loading.gif";

function Loading() {
  return (
    <div className="flex-1 w-full h-full flex items-center justify-center">
      <div className="h-40 bg-loading absolute top-0 w-full"></div>
      <div className="w-full flex items-center justify-center flex-col gap-6 -translate-y-1/2">
        <img src={loading} alt="loading" width="255" />
        <div className="w-[70%] h-2 bg-primary_green">
          <div className="w-full h-full bg-loadingLine"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
