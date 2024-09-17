import React from 'react'

const AuthorListItem = () => {
  return (
    <div className="pb-2">
        <figure className="flex gap-2 bg-gray md:p-0 dark:bg-gray-100">
            <img className="w-20 h-20 md:w-25 md:h-auto object-cover" src="https://images.unsplash.com/photo-1495716868937-273203d5bb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxsYWR5fGVufDB8MHx8fDE2OTQxNzI4MTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" width="25" height="25"/>
            <div className="pt-1 md:p-2 md:text-left space-y-1">
            
            <figcaption className="font-medium">
                <div className="text-sm text-black-900 dark:text-black-400">
                    Sarah Dayan
                </div>
                <div className=" text-sm text-slate-700 dark:text-slate-400">
                    Tech & Gadgets Blogger
                </div>
            </figcaption>
            
            <blockquote>
                <p className="text-sm font-medium text-dark">
                “Tailwind CSS is the only framework that"
                </p>
            </blockquote>
            
            </div>
        </figure>
    </div>
  )
}

export default AuthorListItem