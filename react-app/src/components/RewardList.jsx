import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RewardList = ({rewards}) => {  

    const reward_list = rewards.map((reward, index) => 
        <tr key={reward.id}>
            <td>{index + 1}</td> 
            <td>{reward.chest.chest}</td>
            <td>{reward.reward_category_reference.reward_category}</td>
            <td>{reward.quantity}</td>
            <td>{reward.reward_items_reference.reward_item}</td>
        </tr>
    )

    return (
        <div className='container'>
            <table className='table table-stripped table-bordered mt-4'>
                <thead className='table-dark'>
                    <tr>
                        <th>S.No</th>
                        <th>Chest</th>
                        <th>Reward-Category</th>
                        <th>Quantity</th>
                        <th>Reward</th>
                    </tr>
                </thead>
                <tbody>
                    {reward_list}
                </tbody>
            </table>
        </div>
    )
}

export default RewardList
