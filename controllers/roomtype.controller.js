const RoomtypeService = require('../services/roomtype.service');
/* 
This is the section of my application that handles client request received from routes, processes them and sends out a response to the client
*/
class RoomtypeController{
    // create room
    async createRoomtype(req, res) {
        const reqBody = req.body

        // Check if the roomtype exist
        const existingRoomtype = await RoomtypeService.fetchOne({
            name: reqBody.name
        })

        if(existingRoomtype){
            res.status(403).json({
                success: false,
                message: 'Roomtype already exist'
            })
        }

        // If not, we can create the roomtype and send a response
        const newRoomtype = await RoomtypeService.create(reqBody)

        res.status(201).json({
            success: true,
            message: 'Roomtype created successfully',
            data: newRoomtype
        })
    }

    async updateRoomtype(req, res) {
        const roomtypeId = req.params.id
        const updateData = req.body
        // Check if the roomtype to edit is in the database
        const existingRoomtype = await RoomtypeService.fetchOne({
            _id: roomtypeId
        })
        if(!existingRoomtype){
            res.status(403).json({
                success: false,
                message: 'Roomtype to edit does not exist'
            })
        }

        const updatedRoomtypeData = await RoomtypeService.update(roomtypeId, updateData)
        res.status(200).json({
            success: true,
            message: 'Roomtype updated successfully',
            data: updatedRoomtypeData
        })
    }

    async deleteRoomtype(req, res) {
        const roomtypeId = req.params.id
        //Check if the roomtype to delete is in the database
        const existingRoomtype = await RoomtypeService.fetchOne({
            _id: roomtypeId
        })
        if(!existingRoomtype){
            res.status(403).json({
                success: false,
                message: 'Roomtype to delete does not exist'
            })
        }

        const deletedRoomtype = await RoomtypeService.delete(roomtypeId)

        res.status(200).json({
            success: true,
            message: 'Roomtype deleted successfully',
            data: deletedRoomtype
        })
    }

    async fetchOne(req, res) {
        const roomtypeId = req.params.id
        // Check if roomtype to fetch exists is in the database
        const existingRoomtype = await RoomtypeService.fetchOne({
            _id: roomtypeId
        })

        if(!existingRoomtype){
            res.status(403).json({
                success: false,
                message: 'Roomtype to fetch does not exist'
            })

        res.status(200).json({
            success: true,
            message: 'Roomtype fetched successfully',
            data: existingRoomtype
        })
        }
    }

    async fetchMany(req, res) {
        const fetchedRoomtypes = await RoomtypeService.fetch({})

        res.status(200).json({
            success: true,
            message: 'Roomtypes fetched successfully',
            data: fetchedRoomtypes
        })
    }
}

module.exports = new RoomtypeController();