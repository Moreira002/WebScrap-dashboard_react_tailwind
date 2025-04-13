import pandas as pd
from sqlalchemy import create_engine

# Lê o arquivo Excel
df = pd.read_excel("C:/Users/Igor Moreira/Projetos/github_projects/Tailwind_dashboardresponsivo/dados_ML.xlsx")

# Renomeia colunas para combinar com os nomes da tabela
df.columns = ["produto", "preco", "vendedor", "avaliacao", "link", "imagem"]

# Cria conexão com PostgreSQL
engine = create_engine("postgresql+psycopg2://postgres:admin@localhost:5433/produtos_db")

# Insere os dados na tabela
df.to_sql("produtos", engine, if_exists="replace", index=False)

print("Dados migrados com sucesso!")
