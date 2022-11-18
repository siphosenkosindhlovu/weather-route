import { FaPaperPlane } from "react-icons/fa"
import { useForm } from "react-hook-form"

const NewsletterForm = ({ data }) => {
    const { register, formState, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <div className="text-white w-full">
                <p className="mb-3">Join our newsletter to receive the latest Weather Route updates</p>
                <div className="flex items-center">
                    <input type="email" className="p-3 text-black flex-1" {...register("email")} />
                    <button className="flex items-center p-3 bg-turqoise"><FaPaperPlane className="mr-2" /> Submit</button>
                </div>
            </div>
        </form>)
}

export default NewsletterForm