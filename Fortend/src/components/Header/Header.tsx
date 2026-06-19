
export default function Header() {
  return (
    <div className="navbar h-10 px-10  bg-base-100 shadow-sm">
      <div className=" flex-1 ">
        <a className="btn btn-ghost text-xl">InternSathi</a>
      </div>
      <div className=" flex-1">
        <input type="text" placeholder="Search" className="input  w-24 md:w-72" />
      </div>
    </div>
  );
}