"use client"

export default function Dashboard(){

return(

<div>

<h1 className="text-3xl font-semibold mb-8">
Dashboard
</h1>


{/* STATS */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl shadow-sm">

<h3 className="text-gray-500 text-sm">
Portfolio Projects
</h3>

<p className="text-3xl font-bold mt-2">
12
</p>

</div>


<div className="bg-white p-6 rounded-xl shadow-sm">

<h3 className="text-gray-500 text-sm">
Inspirations
</h3>

<p className="text-3xl font-bold mt-2">
8
</p>

</div>


<div className="bg-white p-6 rounded-xl shadow-sm">

<h3 className="text-gray-500 text-sm">
Contact Messages
</h3>

<p className="text-3xl font-bold mt-2">
4
</p>

</div>

</div>

</div>

)

}