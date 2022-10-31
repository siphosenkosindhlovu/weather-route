import { CgCheckR, CgMathMinus } from "react-icons/cg"

const Icon = ({ state }) => state ? <CgCheckR color="#83BF36" size={27} className="m-auto" /> : <CgMathMinus color="#ADADAD" size={27} className="m-auto" />

const FeaturesCompareTable = ({ data }) => {
    return (
        <div className="bg-green-muted">
            <div className="container py-16">
                <h2 className="title text-center text-green-primary mb-12">{data.title}</h2>
                <table className="table-auto md:table-fixed w-full">
                    <thead>
                        <tr className="bg-green-primary text-white font-medium text-lg">
                            <th className="text-left px-8 py-3">
                                Features
                            </th>
                            <th width={150} className="max-w-[150px]">
                                Free
                            </th>
                            <th width={150} className="max-w-[150px]">
                                Subscription
                            </th>
                            <th width={150} className="max-w-[150px]">
                                Other Apps
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-50 border border-gray-200 text-gray-600">
                        {
                            data.features.map((feature, i) => (
                                <tr className="border-b border-gray-200">
                                    <td className="border border-gray-200 px-8 py-3">
                                        {feature.name}
                                    </td>
                                    <td className="border border-gray-200 text-center py-3">
                                        <Icon state={feature.free} />
                                    </td>
                                    <td className="border border-gray-200 text-center py-3">
                                        <Icon state={feature.subscription} />
                                    </td>
                                    <td className="border border-gray-200 text-center py-3">
                                        <Icon state={feature.otherApps} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FeaturesCompareTable