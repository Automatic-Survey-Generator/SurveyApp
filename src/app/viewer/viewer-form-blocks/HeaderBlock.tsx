import GenericBlock from "./GenericBlock";

export default function HeaderBlock({title, description}){

    return (
        <div className="p-8">
            <div className="text-center">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="mt-3 text-sm text-gray-800">{description}</p>
            </div>
        </div>
    )

}