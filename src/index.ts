import { server } from './server/Server'

server.listen(process.env.PORT || 3333, () => console.log(`Server running on http://localhost:${process.env.PORT || 3333}`)); 