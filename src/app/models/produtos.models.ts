export interface Produtos {
    id: number;
    nome: string;
    descricao: string;
    cst: string;
    codigoNcm: string;
    aliquota: string;
    cest: string;
    origem: string;
    csosn: string;
    unidade: string;
    observacao: string;
    codigo_barras: string;
    tipo: string;
    ativo: string;
    id_fornecedor: number;
    id_grupo: number;
    estoques: {
        filial: string;
        preco_venda: number;
        preco_venda_2: number;
        preco_compra: number;
        preco_custo: number;
        preco_custo_medio: number;
        preco_custo_venda: number;
        preco_transferencias: number;
        estoque_atual: number;
        estoque_max: number;
        estoque_min: number;
        id_produto: number;
        createdAt: false;
        updatedAt: false;
    }



}

