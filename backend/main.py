from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import uvicorn
import os

app = FastAPI()

# Serve os arquivos estáticos (React)
app.mount(
    "/static",
    StaticFiles(directory="../frontend/dist/assets"),
    name="static"
)


# Rota para a home (React index.html)
@app.get("/")
def read_index():
    return FileResponse("../frontend/dist/index.html")


# Se tiver outras rotas FastAPI, adicione aqui normalmente



# Permitir o frontend acessar a API (ajuste a origem em prod)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção, especifique: ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Caminho do Excel
FILE_PATH = r"C:\\Users\\Igor Moreira\\Projetos\\github_projects\\Tailwind_dashboardresponsivo\\dados_ML.xlsx"

@app.get("/produtos")
def get_produtos():
    try:
        df = pd.read_excel(FILE_PATH)
        produtos = df.to_dict(orient="records")
        return {"status": "ok", "produtos": produtos}
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
