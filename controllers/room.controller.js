const RoomService = require('../services/room.service');
/* 
This is the section of my application that handles client request received from routes, processes them and sends out a response to the client
*/
class RoomController{
    // create room
    async createRoom(req, res) {
        const reqBody = req.body

        // Check if the room exist
        const existingRoom = await RoomService.fetchOne({
            name: reqBody.name
        })

        if(existingRoom){
            res.status(403).json({
                success: false,
                message: 'Room already exist'
            })
        }

        // If not, we can create the room and send a response
        const newRoom = await RoomService.create(reqBody)

        res.status(201).json({
            success: true,
            message: 'Room created successfully',
            data: newRoom
        })
    }

    async updateRoom(req, res) {
        const roomId = req.params.id
        const updateData = req.body
        // Check if the room to edit is in the database
        const existingRoom = await RoomService.fetchOne({
            _id: roomId
        })
        if(!existingRoom){
            res.status(403).json({
                success: false,
                message: 'Room to edit does not exist'
            })
        }

        const updatedRoomData = await RoomService.update(roomId, updateData)
        res.status(200).json({
            success: true,
            message: 'Room updated successfully',
            data: updatedRoomData
        })
    }

    async deleteRoom(req, res) {
        const roomId = req.params.id
        //Check iif the room to delete is in the database
        const existingRoom = await RoomService.fetchOne({
            _id: roomId
        })
        if(!existingRoom){
            res.status(403).json({
                success: false,
                message: 'Room to delete does not exist'
            })
        }

        const deletedRoom = await RoomService.delete(roomId)

        res.status(200).json({
            success: true,
            message: 'Room deleted successfully',
            data: deletedRoom
        })
    }

    async fetchOne(req, res) {
        const roomId = req.params.id
        // Check if room to fetch exists is in the database
        const existingRoom = await RoomService.fetchOne({
            _id: roomId
        })

        if(!existingRoom){
            res.status(403).json({
                success: false,
                message: 'Room to fetch does not exist'
            })

        res.status(200).json({
            success: true,
            message: 'Room fetched successfully',
            data: existingRoom
        })
        }
    }

    async fetchMany(req, res) {
        const fetchedRooms = await RoomService.fetch({})

        res.status(200).json({
            success: true,
            message: 'ROoms fetched successfully',
            data: fetchedRooms
        })
    }
}

module.exports = new RoomController();