# 📄 Registrar Nota Fiscal – API Pierserv

Automação de testes para o endpoint de **registro de nota fiscal** na **Pierserv**, por **Gabriel Ferreira Santos**.

## 📤 Endpoint

- **Método:** POST
- **Rota:** /registrarNotaFiscal

## 🧾 Payload Exemplo

```json
{
  "numero_nf": "123456",
  "serie": "1",
  "data_emissao": "2025-07-24",
  "sigla_cliente": "XP",
  "produtos": [
    {
      "sku": "XPTESTE001",
      "quantidade": 10,
      "valor_unitario": 25.00
    }
  ]
}
```

## ✅ Validações
- Status 200
- Validação dos produtos inseridos
- Mensagem de sucesso
