
Funcionalidades/ Explicações;

** Aplicação para fins de aprendizado sobre API, nodejs, programação back-end, https protocols REST.


Módulo Operacional { 

	Cadastro Usuario, (POST/PATCH)
	Listagem de Usuarios, (GET)
	Cadastro Loja, (POST)
	Login,	(GET) =>
} 


Módulo Mercadoria {

1	Cadastro, (POST/PATCH) => Cod interno (ID), Cod Barras (EAN), Nome Produto, Preço, NCM, Cest ;
2	Listagem Produtos, (GET) => Lista todos os Produtos ou Produto Especifico,
6	Gestao de Produto, (GET)
3	Alteração de Preço, (PATCH)
	Família de Produtos, (POST/GET) => no in time
	}

Módulo Estoque {

5	Gestão Estoque, (GET)
4	Acerto Estoque, (POST)
	Inventário,
	Receita,
	Associado, (carne kg p/ bdj ) x (pct 100un p/ cod_un ex.: Balas, Pirulitos),
	Trocas,

}

Módulo Fornecedor {

	Cadastro, (POST)
	Listagem, (GET) => Lista todos os fornecedores

}

Módulo Financeiro {

	Contas à Pagar, (POST/GET)
	Contas à Receber, (POST/GET)
	Pagamento Agendado, (POST/GET)
	
}

Módulo Fiscal  {

	Tipos de Entrada {
		NFe Compra,
		NFe Serviço/Despesa

	} 
	Tipos de Saída {
		NFe Venda , => CNPJ
		NFCe Venda , => Consumidor
		Transferência, => Transferência de Produtos entre Lojas Matriz x Filiais x CDs.
		NFe Serviço, 
	}

	NFe Entrada, (POST/GET/PATCH) => Lançamento Manual/ leitor xml.
	NFe Saída, (POST/GET/PATCH) => Lançamento Manual.
	NF Despesa, (POST/GET) => Lancamento Manual.
	NFe Transporte CTE, (POST/GET) => https://www.cte.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=cktLvUUKqh0	

}
	

Módulo Contábil {

	Sped fiscal,
	Sped contribuicoes,
	Icms Simples Nacional,
	Legislacao => ? NCM, CFOP, Aliquota, MVA, PAUTA, PIS/ COFINS..:

}

Módulo Compra/ Venda {

	Pedido Compras,
	Orcamento de Venda,
	Faturamento, => Compra x Venda (liquido, bruto)

} 

