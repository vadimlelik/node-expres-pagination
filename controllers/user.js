export const getAll = async (req, res) => {

    try {
        if (res.paginatedResults) {
            return res.json(res.paginatedResults)
        }
    } catch (e) {
        console.log(e)
    }
}
