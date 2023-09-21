import { useState, useEffect } from "react"
import axios from "axios"
import ClassSectionDisplay from "./ClassSectionDisplay"

const AddTags = () => {
    const [legends, setLegends] = useState([])
    const [tagName, setTagName] = useState("")
    const [tagDesc, setTagDesc] = useState("")

    const getAllLegends = async () => {
        const res = await axios.get("/api/legends")
        setLegends(res.data)
    }

    useEffect(() => {
        getAllLegends()
    }, [])
    console.log(legends)
    return (
        <>
            <form>
                <label>Tag Name:</label>
                <input
                    placeholder="Enter your tag name here"
                    onClick={e => setTagName(e.target.value)}
                />
                <label>Description:</label>
                <input
                    placeholder="Describe your tag in more detail"
                    onClick={e => setTagDesc(e.target.value)}
                />

                <section className="">
                    <ClassSectionDisplay legends={legends} nameOfClass='Recon' legendClassId={1}/>
                    <ClassSectionDisplay legends={legends} nameOfClass='Assault' legendClassId={2}/>
                    <ClassSectionDisplay legends={legends} nameOfClass='Skirmisher' legendClassId={3}/>
                    <ClassSectionDisplay legends={legends} nameOfClass='Support' legendClassId={4}/>
                    <ClassSectionDisplay legends={legends} nameOfClass='Controller' legendClassId={5}/>
                </section>
            </form>
        </>
    )
}

export default AddTags
