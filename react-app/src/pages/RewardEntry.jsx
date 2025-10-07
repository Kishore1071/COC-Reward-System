import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'
import RewardList from '../components/RewardList'

const RewardEntry = () => {

    const [chest, setChest] = useState([])
    const [reward_category, setRewardCategory] = useState([])
    const [reward_container, setRewardContainer] = useState([])
    const [reward_items, setRewardItems] = useState([])
    const [rewards, setRewards] = useState([])
    
    const [chest_id, setChestId] = useState('')
    const [reward_category_id, setRewardCategoryId] = useState('')
    const [reward_item_id, setRewardItemId] = useState('')
    const [quantity, setQuantity] = useState('')
    const [notes, setNotes] = useState('')

    const getChests = () => {
        axios.get('http://127.0.0.1:8000/chest/')
        .then(response => {
            setChest(response.data)
        })
    }

    const getRewardCategory = () => {
        axios.get('http://127.0.0.1:8000/reward/category/')
        .then(response => {
            setRewardCategory(response.data)
        })
    }

    const getRewardItems = () => {
        axios.get('http://127.0.0.1:8000/reward/items/')
        .then(response => {
            setRewardContainer(response.data)
        })
    }

    const getRewards = () => {
        axios.get('http://127.0.0.1:8000/chest/records/')
        .then(response => {
            console.log(response.data)
            setRewards(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const chest_options = chest.map(c => <option key={c.id} value={c.id}>{c.chest}</option>)

    const reward_category_options = reward_category.map(rc => <option key={rc.id} value={rc.id}>{rc.reward_category}</option>)

    const reward_items_options = reward_items.map(ri => <option key={ri.id} value={ri.id}>{ri.reward_item}</option>)

    const SubmitHandler = () => {
        const reward_data = {
            chest_id: chest_id,
            reward_category_reference_id: reward_category_id,
            reward_items_reference_id: reward_item_id,
            quantity: quantity,
            extra_note: notes
        }

        console.log(reward_data)

        axios.post('http://127.0.0.1:8000/chest/records/', reward_data)
        .then(response => {
            console.log("object")

            getRewards()
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getChests()
        getRewardCategory()
        getRewardItems()
        getRewards()
    }, [])

    useEffect(() => {

        const new_items = reward_container.filter(i =>String(i.reward_category_reference) === String(reward_category_id))

        setRewardItems(new_items)

    }, [reward_category_id])

    return (
        <div>

            <Menu />

            <div className='container mt-4'>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Chest</th>
                            <th>Reward Category</th>
                            <th>Quantity</th>
                            <th>Reward items</th>
                            <th>Notes</th>
                            <th>Submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select value={chest_id} onChange={event => setChestId(event.target.value)}>
                                    <option>Select</option>
                                    {chest_options}
                                </select>
                            </td>
                            <td>
                                <select value={reward_category_id} onChange={event => setRewardCategoryId(event.target.value)}>
                                    <option>Select</option>
                                    {reward_category_options}
                                </select>
                            </td>
                            <td>
                                <input type="number" value={quantity} onChange={event => setQuantity(event.target.value)} />
                            </td>
                            <td>
                                <select value={reward_item_id} onChange={event => setRewardItemId(event.target.value)}>
                                    <option>Select</option>
                                    {reward_items_options}
                                </select>
                            </td>
                            <td>
                                <input type="text" value={notes} onChange={event => setNotes(event.target.value)} />
                            </td>
                            <td>
                                <input type="button" className='btn btn-sm btn-primary' value={'Submit'} onClick={SubmitHandler} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <RewardList rewards={rewards} />
        </div>
    )
}

export default RewardEntry
