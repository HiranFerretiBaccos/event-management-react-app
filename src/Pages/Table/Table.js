import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

function Table() {
    const columns = [
        {
            dataField: 'evento',
            text: 'Evento',
            filter: textFilter({
                placeholder: 'Filtre por Evento',
                style: {
                    fontWeight: "bold",
                    backgroundColor: '#fff'
                },
            }),
        },
        {
            dataField: 'data',
            text: 'Data',
            filter: textFilter({
                placeholder: 'Filtre por Data',
                style: {
                    fontWeight: "bold",
                    backgroundColor: '#fff'
                },
            }),
        },
        {
            dataField: 'localizacao',
            text: 'Localização',
            filter: textFilter({
                placeholder: 'Filtre por Localização',
                style: {
                    fontWeight: "bold",
                    backgroundColor: '#fff'
                },
            }),
        },
        {
            dataField: 'preco',
            text: 'Preço',
            filter: textFilter({
                placeholder: 'Filtre por Preço',
                style: {
                    fontWeight: "bold",
                    backgroundColor: '#fff'
                },
            }),
        }];

    const products = [
        {
            evento: "Rock in Rio",
            data: "26/09/2022",
            localizacao: "Rio de Janeiro",
            preco: 350.00,
        },
        {
            evento: "Lollapalooza",
            data: "30/09/2022",
            localizacao: "São Paulo",
            preco: 425.50,
        },
        {
            evento: "Jogo do Brasil",
            data: "24/10/2022",
            localizacao: "São Paulo",
            preco: 150.50,
        },
        {
            evento: "Coringa no Cinema",
            data: "25/12/2022",
            localizacao: "São Paulo",
            preco: 65.25,
        },
        {
            evento: "Show na Praia Grande",
            data: "31/12/2022",
            localizacao: "São Paulo",
            preco: 0,
        },
        {
            evento: "Réveillon em Copacabana",
            data: "31/12/2022",
            localizacao: "Rio de Janeiro",
            preco: 100.00,
        },
        {
            evento: "Rodízio de Comida Japonesa",
            data: "23/109/2022",
            localizacao: "Curitiba",
            preco: 120.25,
        },
        {
            evento: "Rodízio de Pizza",
            data: "01/01/2023",
            localizacao: "São Paulo",
            preco: 55.50,
        },
        {
            evento: "Olímpiadas de Inverno",
            data: "10/12/2022",
            localizacao: "Rio Grande do sol",
            preco: 175.80,
        },
        {
            evento: "Rodízio de Massas",
            data: "15/12/2022",
            localizacao: "São Paulo",
            preco: 66.60,
        },
        {
            evento: "Cruzeiro Litoral",
            data: "27/12/2022",
            localizacao: "Bahia",
            preco: 3550.99,
        },
        {
            evento: "Passeio na Av. Paulista",
            data: "31/12/2022",
            localizacao: "São Pauo",
            preco: 0,
        },
        {
            evento: "Rock in Rio",
            data: "26/09/2022",
            localizacao: "Rio de Janeiro",
            preco: 350.00,
        },
        {
            evento: "Lollapalooza",
            data: "30/09/2022",
            localizacao: "São Paulo",
            preco: 425.50,
        },
        {
            evento: "Jogo do Brasil",
            data: "24/10/2022",
            localizacao: "São Paulo",
            preco: 150.50,
        },
        {
            evento: "Coringa no Cinema",
            data: "25/12/2022",
            localizacao: "São Paulo",
            preco: 65.25,
        },
        {
            evento: "Show na Praia Grande",
            data: "31/12/2022",
            localizacao: "São Paulo",
            preco: 0,
        },
        {
            evento: "Réveillon em Copacabana",
            data: "31/12/2022",
            localizacao: "Rio de Janeiro",
            preco: 100.00,
        },
        {
            evento: "Rodízio de Comida Japonesa",
            data: "23/109/2022",
            localizacao: "Curitiba",
            preco: 120.25,
        },
        {
            evento: "Rodízio de Pizza",
            data: "01/01/2023",
            localizacao: "São Paulo",
            preco: 55.50,
        },
        {
            evento: "Olímpiadas de Inverno",
            data: "10/12/2022",
            localizacao: "Rio Grande do sol",
            preco: 175.80,
        },
        {
            evento: "Rodízio de Massas",
            data: "15/12/2022",
            localizacao: "São Paulo",
            preco: 66.60,
        },
        {
            evento: "Cruzeiro Litoral",
            data: "27/12/2022",
            localizacao: "Bahia",
            preco: 3550.99,
        },
        {
            evento: "Passeio na Av. Paulista",
            data: "31/12/2022",
            localizacao: "São Pauo",
            preco: 0,
        },
    ];

    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total spanPagination">
            Mostrando {from} de {to} de {size} Resultados.
        </span>
    );

    const options = {
        pageStartIndex: 0,
        paginationSize: 4,
        firstPageText: 'Primeira',
        lastPageText: 'Última',
        prePageText: 'Anterior',
        nextPageText: 'Próxima',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'Todas', value: products.length
        }]
    };

    return (
        <>
            <div>
                <h1 className='tableTitle'>Tabela de Eventos</h1>
                <BootstrapTable
                    keyField='id'
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                    pagination={paginationFactory(options)}
                />
            </div>
        </>
    )
}

export default Table;