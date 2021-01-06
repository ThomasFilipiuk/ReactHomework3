import Note from "../models/noteModel"


/*This is a generic function I have to reply to unauthorized requests */
exports.wrongRoute = async (req, res) => {
    return res.status(405).json({general : "method not allowed" })
}

/*This is the function that is supposed to return all the notes*/
exports.getNotes = async (req, res) => {

}

/*returns one note given the noteId  else return error message in the catch block */
exports.getNote = async (req, res) => {

}

/*This is the function that adds an article*/
exports.addNote = async (req, res) => {

}

/* Finds the given note and updates it. returns the updated note */
exports.updateNote = async (req, res) => {

}

/* Finds the given noteId and deletes it */
exports.deleteNote = async (req, res) => {

}






