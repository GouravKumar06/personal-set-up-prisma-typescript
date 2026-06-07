## Docker Installation
1. docker network create network_name

2. docker run 
    -d  
    --network network_name
    --name postgresContainer  
    -e POSTGRES_PASSWORD=admin123 
    -p 5432:5432 
   postgres   

3. docker build --network=host -t  my_project .  

4. docker run 
   --network network_name  
   -p 3000:3000 
   -e DATABASE_URL=postgresql://         postgres:admin123@postgresContainer:5432/postgres 
   my_project
