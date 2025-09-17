import pandas as pd
import getpass
import os
import platform
 
# Função para identificar o usuário ou dispositivo
def identificar_usuario():
    try:
        usuario = getpass.getuser()
    except Exception:
        usuario = None 
    if not usuario or usuario.strip() == "":
        try:
            usuario = platform.node()  # nome do host/dispositivo
        except Exception:
            usuario = "Desconhecido" 
    return usuario 

# Caminho do arquivo Excel
caminho = r"C:\Users\FWIK\Downloads\saida.xlsx"  # ajuste conforme o dispositivo
 
# Descobre o usuário/logado ou dispositivo
usuario = identificar_usuario()
 
# Cria o arquivo se não existir
if not os.path.exists(caminho):
    df_inicial = pd.DataFrame(columns=["Produto", "Quantidade", "Usuario"])
    df_inicial.to_excel(caminho, sheet_name="Log", index=False)
 
# Exemplo de dados para salvar
df = pd.DataFrame({
    "Produto": ["A", "B"],
    "Quantidade": [10, 20],
    "Usuario": [usuario, usuario]  # insere usuário/dispositivo

})
 
# Abre o Excel em modo append (acrescentar sem apagar o histórico)
with pd.ExcelWriter(caminho, engine="openpyxl", mode="a", if_sheet_exists="overlay") as writer:
    startrow = writer.sheets["Log"].max_row
    df.to_excel(writer, sheet_name="Log", index=False, header=False, startrow=startrow)

 