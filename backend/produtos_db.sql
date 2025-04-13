--
-- PostgreSQL database dump
--

-- Dumped from database version 16.8
-- Dumped by pg_dump version 17.4

-- Started on 2025-04-13 12:46:29

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16432)
-- Name: produtos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produtos (
    produto text,
    preco double precision,
    vendedor text,
    avaliacao double precision,
    link text,
    imagem text
);


ALTER TABLE public.produtos OWNER TO postgres;

--
-- TOC entry 4776 (class 0 OID 16432)
-- Dependencies: 215
-- Data for Name: produtos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produtos (produto, preco, vendedor, avaliacao, link, imagem) FROM stdin;
iPhone 13 128GB	4500	Apple Store	4.8	https://www.mercadolivre.com.br/iphone-13	https://images.pexels.com/photos/12582008/pexels-photo-12582008.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load
Galaxy S23 Ultra	3800	Samsung Oficial	4.6	https://www.mercadolivre.com.br/galaxy-s23	https://images.pexels.com/photos/16149966/pexels-photo-16149966/free-photo-of-camera-maquina-smartphone-conexao.jpeg?auto=compress&cs=tinysrgb&w=600
Xiaomi Redmi Note 12	1200	Lojinha China	4.2	https://www.mercadolivre.com.br/xiaomi-note12	https://images.pexels.com/photos/13588948/pexels-photo-13588948.jpeg?auto=compress&cs=tinysrgb&w=600
Motorola Edge 40	2200	Tech Mundo	4	https://www.mercadolivre.com.br/moto-edge40	https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Motorola_Edge_50_Neo.jpg/640px-Motorola_Edge_50_Neo.jpg
iPhone 15 Pro Max	5500	iPlace	4.9	https://www.mercadolivre.com.br/iphone-15	https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-maca-iphone-smartphone-tecnologia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
\.


-- Completed on 2025-04-13 12:46:41

--
-- PostgreSQL database dump complete
--

