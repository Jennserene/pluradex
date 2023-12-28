import {auth} from "@/utilities/auth"


const EditPage = () => {
  const session = auth()
  console.log(session)
  return (
    <div>
      <h1>Edit Page</h1>
    </div>
  )
}

export default EditPage