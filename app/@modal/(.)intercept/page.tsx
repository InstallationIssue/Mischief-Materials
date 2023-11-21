import { FC } from "react"

import AddCharacter from "@/app/forms/addCharacter"
import Modal from "@/app/_components/modal"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Modal>
      <AddCharacter/>
    </Modal>
  )
}

export default page