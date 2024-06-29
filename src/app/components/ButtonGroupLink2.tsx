const ButtonGroupLink2=()=>{

    return(
        <div className="inline-flex rounded-md shadow-sm">

            <button type="button" className="px-5 py-2.5 bg-slate-800 text-slate-200 font-medium text-sm focus:outline-none  outline-none focus:z-10 focus:ring-2 focus:ring-slate-800 rounded-s-lg hover:bg-slate-900 hover:text-slate-100 border-t border-b border-gray-400">Profile</button>
            <button type='button' className="px-5 py-2.5 bg-slate-800 text-slate-200 font-medium text-sm focus:outline-none focus:z-10 focus:ring-2 focus:ring-slate-800 hover:bg-slate-900 hover:text-slate-100 border-t border-b border-gray-400 border-l"> Setting</button>
            <button type='button' className="px-5 py-2.5 bg-slate-800 text-slate-200 font-medium text-sm focus:outline-none focus:z-10 focus:ring-2 focus:ring-slate-800 hover:bg-slate-900 hover:text-slate-100 border-t border-b border-gray-400 border-l rounded-e-lg"> Message</button>

        </div>


    )

}
export default ButtonGroupLink2;