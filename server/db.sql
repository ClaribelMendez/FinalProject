--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- Name: genres; Type: TABLE; Schema: public; Owner: tpl_1121_10
--

CREATE TABLE public.genres (
    id integer NOT NULL,
    genre text
);


ALTER TABLE public.genres OWNER TO tpl_1121_10;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl_1121_10
--

ALTER TABLE public.genres ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.favorites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: playlists; Type: TABLE; Schema: public; Owner: tpl_1121_10
--

CREATE TABLE public.playlists (
    id integer NOT NULL,
    image text,
    name text,
    link text,
    genre integer,
    description text,
    user_id boolean DEFAULT false
);


ALTER TABLE public.playlists OWNER TO tpl_1121_10;

--
-- Name: playlists_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl_1121_10
--

ALTER TABLE public.playlists ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.playlists_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: scores; Type: TABLE; Schema: public; Owner: tpl_1121_10
--

CREATE TABLE public.scores (
    id integer NOT NULL,
    user_id integer,
    genre text,
    score text
);


ALTER TABLE public.scores OWNER TO tpl_1121_10;

--
-- Name: scores_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl_1121_10
--

ALTER TABLE public.scores ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.scores_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl_1121_10
--

CREATE TABLE public.users (
    id integer NOT NULL,
    firstname text,
    lastname text,
    username text
);


ALTER TABLE public.users OWNER TO tpl_1121_10;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl_1121_10
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: tpl_1121_10
--

COPY public.genres (id, genre) FROM stdin;
2	House
3	Trap
4	Jazz
5	Reggaeton
6	Dembow
7	EDM
8	Chant
9	world-music
1	Ambient
10	afro-house
11	tribal-techno
12	Game
\.


--
-- Data for Name: playlists; Type: TABLE DATA; Schema: public; Owner: tpl_1121_10
--

COPY public.playlists (id, image, name, link, genre, description, user_id) FROM stdin;
\.


--
-- Data for Name: scores; Type: TABLE DATA; Schema: public; Owner: tpl_1121_10
--

COPY public.scores (id, user_id, genre, score) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl_1121_10
--

COPY public.users (id, firstname, lastname, username) FROM stdin;
5	Cb	\N	\N
6	Cb	\N	\N
1	\N	\N	\N
4	\N	\N	\N
7	Cb	\N	\N
8	Cb	\N	\N
9	Cb	\N	\N
10	Cb	\N	\N
11	Cb	\N	\N
12	Cb	\N	\N
13	Cb	\N	\N
14	Cb	\N	\N
15	Cb	\N	\N
16	Cb	\N	\N
17	Cb	\N	\N
18	Cb	\N	\N
19	Cb	\N	\N
20	Cb	\N	\N
21	Cb	\N	\N
22	Cb	\N	\N
23		\N	\N
24		\N	\N
25		\N	\N
26		\N	\N
27		\N	\N
28		\N	\N
29		\N	\N
30		\N	\N
31		\N	\N
32		\N	\N
33		\N	\N
34		\N	\N
35	\N	\N	\N
36	\N	\N	\N
37		\N	\N
38		\N	\N
39	\N	\N	\N
40	\N	\N	\N
41		\N	\N
42		\N	\N
43	\N	\N	\N
44	\N	\N	\N
45	\N	\N	\N
46	\N	\N	\N
47	\N	\N	\N
48	\N	\N	\N
49		\N	\N
50		\N	\N
51		\N	\N
52		\N	\N
53		\N	\N
54		\N	\N
55		\N	\N
56		\N	\N
57		\N	\N
58		\N	\N
59		\N	\N
60		\N	\N
61		\N	\N
62		\N	\N
63	\N	\N	\N
64	\N	\N	\N
65	\N	\N	\N
66	\N	\N	\N
67		\N	\N
68		\N	\N
69	\N	\N	\N
70	\N	\N	\N
71	\N	\N	\N
72	\N	\N	\N
73	\N	\N	\N
74	\N	\N	\N
75	\N	\N	\N
76	\N	\N	\N
77	\N	\N	\N
78	\N	\N	\N
79	\N	\N	\N
80	\N	\N	\N
81	\N	\N	\N
82	\N	\N	\N
83	\N	\N	\N
84	\N	\N	\N
85	\N	\N	\N
86	\N	\N	\N
87	\N	\N	\N
88	\N	\N	\N
89	\N	\N	\N
90	\N	\N	\N
91	\N	\N	\N
92	\N	\N	\N
93	\N	\N	\N
94	\N	\N	\N
95	\N	\N	\N
96	\N	\N	\N
97	\N	\N	\N
98	\N	\N	\N
99	\N	\N	\N
100	\N	\N	\N
101	\N	\N	\N
102	\N	\N	\N
103	\N	\N	\N
104	\N	\N	\N
105	\N	\N	\N
106	\N	\N	\N
107	\N	\N	\N
108	\N	\N	\N
109	\N	\N	\N
110	\N	\N	\N
111	\N	\N	\N
112	\N	\N	\N
113	\N	\N	\N
114	\N	\N	\N
115	\N	\N	\N
116	\N	\N	\N
117	\N	\N	\N
118	\N	\N	\N
119	\N	\N	\N
120	\N	\N	\N
121	\N	\N	\N
122	\N	\N	\N
123	\N	\N	\N
124	\N	\N	\N
125	\N	\N	\N
126	\N	\N	\N
127	\N	\N	\N
128	\N	\N	\N
129	\N	\N	\N
130	\N	\N	\N
131	\N	\N	\N
132	\N	\N	\N
133	\N	\N	\N
134	\N	\N	\N
135	\N	\N	\N
136	\N	\N	\N
137	\N	\N	\N
138	\N	\N	\N
139	\N	\N	\N
140	\N	\N	\N
141	\N	\N	\N
142	\N	\N	\N
143	\N	\N	\N
144	\N	\N	\N
145	\N	\N	\N
146	\N	\N	\N
147	\N	\N	\N
148	\N	\N	\N
149	\N	\N	\N
150	\N	\N	\N
151	\N	\N	\N
152	\N	\N	\N
153	\N	\N	\N
154	\N	\N	\N
155	\N	\N	\N
156	\N	\N	\N
157	\N	\N	\N
158	\N	\N	\N
159	\N	\N	\N
160	\N	\N	\N
161	\N	\N	\N
162	\N	\N	\N
163	\N	\N	\N
164	\N	\N	\N
165	\N	\N	\N
166	\N	\N	\N
167	\N	\N	\N
168	\N	\N	\N
169	\N	\N	\N
170	\N	\N	\N
171	\N	\N	\N
172	\N	\N	\N
173	\N	\N	\N
174	\N	\N	\N
175	\N	\N	\N
176	\N	\N	\N
177	\N	\N	\N
178	\N	\N	\N
179	\N	\N	\N
180	\N	\N	\N
181	\N	\N	\N
182	\N	\N	\N
183	\N	\N	\N
184	\N	\N	\N
185	\N	\N	\N
186	\N	\N	\N
187	\N	\N	\N
188	\N	\N	\N
189	\N	\N	\N
190	\N	\N	\N
191	\N	\N	\N
192	\N	\N	\N
193	\N	\N	\N
194	\N	\N	\N
195	\N	\N	\N
196	\N	\N	\N
197	\N	\N	\N
198	\N	\N	\N
199	\N	\N	\N
200	\N	\N	\N
201	\N	\N	\N
202	\N	\N	\N
203	\N	\N	\N
204	\N	\N	\N
205	\N	\N	\N
206	\N	\N	\N
207	\N	\N	\N
208	\N	\N	\N
209	Cb	\N	\N
210	\N	\N	\N
211	\N	\N	\N
212	\N	\N	\N
213	\N	\N	\N
214	\N	\N	\N
215	\N	\N	\N
216	\N	\N	\N
217	\N	\N	\N
218	\N	\N	\N
219	\N	\N	\N
220	\N	\N	\N
221	\N	\N	\N
222	\N	\N	\N
223	\N	\N	\N
224	\N	\N	\N
225	\N	\N	\N
226	\N	\N	\N
227	\N	\N	\N
228	\N	\N	\N
229	\N	\N	\N
230	\N	\N	\N
231	\N	\N	\N
232	\N	\N	\N
233	\N	\N	\N
234	\N	\N	\N
235	\N	\N	\N
236	\N	\N	\N
237	\N	\N	\N
238	\N	\N	\N
239	\N	\N	\N
240	\N	\N	\N
241	\N	\N	\N
242	\N	\N	\N
243	\N	\N	\N
244	\N	\N	\N
245	\N	\N	\N
246	\N	\N	\N
247	\N	\N	\N
248	\N	\N	\N
249	\N	\N	\N
250	\N	\N	\N
251	\N	\N	\N
252	\N	\N	\N
253	\N	\N	\N
254	\N	\N	\N
255	\N	\N	\N
256	\N	\N	\N
257	\N	\N	\N
258	\N	\N	\N
259	\N	\N	\N
260	\N	\N	\N
262	\N	\N	\N
261	\N	\N	\N
263	\N	\N	\N
264	\N	\N	\N
265	\N	\N	\N
266	\N	\N	\N
267	\N	\N	\N
268	\N	\N	\N
269	\N	\N	\N
\.


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl_1121_10
--

SELECT pg_catalog.setval('public.favorites_id_seq', 12, true);


--
-- Name: playlists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl_1121_10
--

SELECT pg_catalog.setval('public.playlists_id_seq', 1, false);


--
-- Name: scores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl_1121_10
--

SELECT pg_catalog.setval('public.scores_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl_1121_10
--

SELECT pg_catalog.setval('public.users_id_seq', 269, true);


--
-- Name: genres favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl_1121_10
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: playlists playlists_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl_1121_10
--

ALTER TABLE ONLY public.playlists
    ADD CONSTRAINT playlists_pkey PRIMARY KEY (id);


--
-- Name: scores scores_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl_1121_10
--

ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl_1121_10
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: scores scores_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl_1121_10
--

ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_user_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

