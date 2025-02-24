// import express from 'express';
// import fs from 'fs';
// import cors from 'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { readFileSync, writeFileSync } from 'fs';

// const app = express();
// const PORT = 3002;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const filePath = path.join(__dirname, 'users.json');

// app.use(express.json());
// app.use(cors());


// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     console.log("Email:", email);
//     console.log("Senha:", password);

//     const users = JSON.parse(readFileSync(filePath, 'utf-8'));
//     console.log("Usuários:", users)

//     const user = users.find(u => u.email === email);
//     console.log("Usuário encontrado:", user);

//     if (!user) {
//         return res.status(401).json({ message: 'Email ou senha inválidos' });
//     }

//     if (user.password !== password) {
//         console.log("Senha não corresponde.");
//         return res.status(401).json({ message: 'Email ou senha inválidos' });
//     }

//     res.status(200).json({ message: 'deu boa amem' });
// });

// app.post("/users", (req, res) => {
//     const { email, password } = req.body;
//     const users = JSON.parse(fs.readFileSync('users.json'));

//     const userExists = users.find(user => user.email === email);
//     if (userExists) {
//         return res.status(409).json({ message: "E-mail já cadastrado" });
//     }

//     users.push({ email, password });
//     fs.writeFileSync('users.json', JSON.stringify(users));
//     return res.status(201).json({ message: "deu boa" });
// });

// app.post('/tasks', async (req, res) => {
//     const { email, title, description, color } = req.body;

//     try {
//         const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//         const userIndex = users.findIndex(user => user.email === email);

//         if (userIndex === -1) {
//             return res.status(404).json({ message: "Usuário não encontrado" });
//         }

//         const newTask = {
//             id: Date.now(),
//             title,
//             description,
//             color,
//         };

//         if (!users[userIndex].tasks) {
//             users[userIndex].tasks = [];
//         }
//         users[userIndex].tasks.push(newTask);

//         fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

//         res.status(201).json({ message: "Tarefa adicionada com sucesso!", task: newTask });
//     } catch (error) {
//         res.status(500).json({ error: "Erro ao salvar a tarefa" });
//     }
// });


// app.get('/users', async (req, res) => {
//     try {
//         const data = await fs.promises.readFile(filePath, 'utf-8');
//         const users = JSON.parse(data);
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: 'Erro ao ler o arquivo' });
//     }
// });

// app.get('/tasks/:email', async (req, res) => {
//     const { email } = req.params;
//     try {
//         const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//         const user = users.find(user => user.email === email);

//         if (!user) {
//             return res.status(404).json({ message: "Usuário não encontrado" });
//         }

//         res.status(200).json(user.tasks || []);
//     } catch (error) {
//         res.status(500).json({ error: "Erro ao buscar as tarefas" });
//     }
// });



// app.listen(PORT, () => {
//     console.log(`porta ${PORT}`);
// });
