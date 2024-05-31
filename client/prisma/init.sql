--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-04-13 21:00:11 ACST

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

--
-- TOC entry 3827 (class 1262 OID 16394)
-- Name: rits_dev; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE rits_dev WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';


ALTER DATABASE rits_dev OWNER TO rits;

\connect rits_dev

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

--
-- TOC entry 5 (class 2615 OID 16403)
-- Name: base; Type: SCHEMA; Schema: -; Owner: rits
--

CREATE SCHEMA base;


ALTER SCHEMA base OWNER TO rits;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 225 (class 1259 OID 16464)
-- Name: Character; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Character" (
    id integer NOT NULL,
    name text NOT NULL,
    background text DEFAULT ''::text NOT NULL,
    xp integer DEFAULT 0 NOT NULL,
    level integer DEFAULT 1 NOT NULL,
    health_max integer DEFAULT 4 NOT NULL,
    health_lost integer DEFAULT 0 NOT NULL,
    armor integer DEFAULT 6 NOT NULL,
    str integer DEFAULT 0 NOT NULL,
    dex integer DEFAULT 0 NOT NULL,
    wil integer DEFAULT 0 NOT NULL,
    att integer DEFAULT 0 NOT NULL,
    profession text DEFAULT ''::text NOT NULL,
    appearance text DEFAULT ''::text NOT NULL,
    physical_detail text DEFAULT ''::text NOT NULL,
    clothing text DEFAULT ''::text NOT NULL,
    personality text DEFAULT ''::text NOT NULL,
    mannerism text DEFAULT ''::text NOT NULL,
    npc boolean DEFAULT true NOT NULL,
    assets text DEFAULT ''::text NOT NULL,
    liabilities text DEFAULT ''::text NOT NULL,
    goals text DEFAULT ''::text NOT NULL,
    misfortunes text DEFAULT ''::text NOT NULL,
    missions text DEFAULT ''::text NOT NULL,
    secrets text DEFAULT ''::text NOT NULL,
    reputations text DEFAULT ''::text NOT NULL,
    hobbies text DEFAULT ''::text NOT NULL
);


ALTER TABLE base."Character" OWNER TO rits;

--
-- TOC entry 224 (class 1259 OID 16463)
-- Name: Character_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Character_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Character_id_seq" OWNER TO rits;

--
-- TOC entry 3828 (class 0 OID 0)
-- Dependencies: 224
-- Name: Character_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Character_id_seq" OWNED BY base."Character".id;


--
-- TOC entry 237 (class 1259 OID 16556)
-- Name: Encounter; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Encounter" (
    id integer NOT NULL,
    name text DEFAULT ''::text NOT NULL
);


ALTER TABLE base."Encounter" OWNER TO rits;

--
-- TOC entry 235 (class 1259 OID 16548)
-- Name: EncounterInstance; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."EncounterInstance" (
    id integer NOT NULL,
    monster_id integer NOT NULL,
    encounter_id integer NOT NULL,
    health_lost integer DEFAULT 0 NOT NULL
);


ALTER TABLE base."EncounterInstance" OWNER TO rits;

--
-- TOC entry 234 (class 1259 OID 16547)
-- Name: EncounterInstance_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."EncounterInstance_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."EncounterInstance_id_seq" OWNER TO rits;

--
-- TOC entry 3829 (class 0 OID 0)
-- Dependencies: 234
-- Name: EncounterInstance_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."EncounterInstance_id_seq" OWNED BY base."EncounterInstance".id;


--
-- TOC entry 236 (class 1259 OID 16555)
-- Name: Encounter_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Encounter_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Encounter_id_seq" OWNER TO rits;

--
-- TOC entry 3830 (class 0 OID 0)
-- Dependencies: 236
-- Name: Encounter_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Encounter_id_seq" OWNED BY base."Encounter".id;


--
-- TOC entry 223 (class 1259 OID 16455)
-- Name: Event; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Event" (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    scenario_id integer NOT NULL
);


ALTER TABLE base."Event" OWNER TO rits;

--
-- TOC entry 222 (class 1259 OID 16454)
-- Name: Event_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Event_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Event_id_seq" OWNER TO rits;

--
-- TOC entry 3831 (class 0 OID 0)
-- Dependencies: 222
-- Name: Event_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Event_id_seq" OWNED BY base."Event".id;


--
-- TOC entry 239 (class 1259 OID 16566)
-- Name: Item; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Item" (
    id integer NOT NULL,
    name text NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    value integer DEFAULT 100 NOT NULL
);


ALTER TABLE base."Item" OWNER TO rits;

--
-- TOC entry 238 (class 1259 OID 16565)
-- Name: Item_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Item_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Item_id_seq" OWNER TO rits;

--
-- TOC entry 3832 (class 0 OID 0)
-- Dependencies: 238
-- Name: Item_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Item_id_seq" OWNED BY base."Item".id;


--
-- TOC entry 221 (class 1259 OID 16443)
-- Name: Location; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Location" (
    id integer NOT NULL,
    name text NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    color text DEFAULT '#D9D9D9'::text NOT NULL,
    icon text DEFAULT ''::text NOT NULL
);


ALTER TABLE base."Location" OWNER TO rits;

--
-- TOC entry 220 (class 1259 OID 16442)
-- Name: Location_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Location_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Location_id_seq" OWNER TO rits;

--
-- TOC entry 3833 (class 0 OID 0)
-- Dependencies: 220
-- Name: Location_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Location_id_seq" OWNED BY base."Location".id;


--
-- TOC entry 243 (class 1259 OID 16587)
-- Name: Magic; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Magic" (
    id integer NOT NULL,
    name text NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    medium text DEFAULT 'magic'::text NOT NULL,
    induction text DEFAULT ''::text NOT NULL
);


ALTER TABLE base."Magic" OWNER TO rits;

--
-- TOC entry 242 (class 1259 OID 16586)
-- Name: Magic_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Magic_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Magic_id_seq" OWNER TO rits;

--
-- TOC entry 3834 (class 0 OID 0)
-- Dependencies: 242
-- Name: Magic_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Magic_id_seq" OWNED BY base."Magic".id;


--
-- TOC entry 233 (class 1259 OID 16528)
-- Name: Monster; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Monster" (
    id integer NOT NULL,
    name text NOT NULL,
    background text DEFAULT ''::text NOT NULL,
    health_max integer DEFAULT 4 NOT NULL,
    armor integer DEFAULT 6 NOT NULL,
    str integer DEFAULT 0 NOT NULL,
    dex integer DEFAULT 0 NOT NULL,
    wil integer DEFAULT 0 NOT NULL,
    size text DEFAULT 'Typical'::text NOT NULL,
    attack integer DEFAULT 0 NOT NULL,
    tactics text DEFAULT ''::text NOT NULL,
    personality text DEFAULT ''::text NOT NULL,
    weakness text DEFAULT ''::text NOT NULL
);


ALTER TABLE base."Monster" OWNER TO rits;

--
-- TOC entry 232 (class 1259 OID 16527)
-- Name: Monster_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Monster_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Monster_id_seq" OWNER TO rits;

--
-- TOC entry 3835 (class 0 OID 0)
-- Dependencies: 232
-- Name: Monster_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Monster_id_seq" OWNED BY base."Monster".id;


--
-- TOC entry 229 (class 1259 OID 16509)
-- Name: Path; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Path" (
    id integer NOT NULL,
    name text DEFAULT ''::text NOT NULL,
    description text DEFAULT ''::text NOT NULL
);


ALTER TABLE base."Path" OWNER TO rits;

--
-- TOC entry 231 (class 1259 OID 16520)
-- Name: PathInstance; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."PathInstance" (
    id integer NOT NULL,
    character_id integer NOT NULL,
    path_id integer NOT NULL,
    health_lost integer DEFAULT 0 NOT NULL
);


ALTER TABLE base."PathInstance" OWNER TO rits;

--
-- TOC entry 230 (class 1259 OID 16519)
-- Name: PathInstance_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."PathInstance_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."PathInstance_id_seq" OWNER TO rits;

--
-- TOC entry 3836 (class 0 OID 0)
-- Dependencies: 230
-- Name: PathInstance_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."PathInstance_id_seq" OWNED BY base."PathInstance".id;


--
-- TOC entry 228 (class 1259 OID 16508)
-- Name: Path_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Path_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Path_id_seq" OWNER TO rits;

--
-- TOC entry 3837 (class 0 OID 0)
-- Dependencies: 228
-- Name: Path_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Path_id_seq" OWNED BY base."Path".id;


--
-- TOC entry 227 (class 1259 OID 16498)
-- Name: Relationship; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Relationship" (
    id integer NOT NULL,
    name text DEFAULT ''::text NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    character_id integer NOT NULL
);


ALTER TABLE base."Relationship" OWNER TO rits;

--
-- TOC entry 226 (class 1259 OID 16497)
-- Name: Relationship_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Relationship_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Relationship_id_seq" OWNER TO rits;

--
-- TOC entry 3838 (class 0 OID 0)
-- Dependencies: 226
-- Name: Relationship_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Relationship_id_seq" OWNED BY base."Relationship".id;


--
-- TOC entry 217 (class 1259 OID 16422)
-- Name: Scenario; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Scenario" (
    id integer NOT NULL,
    name text NOT NULL,
    setting text DEFAULT ''::text NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    image text DEFAULT 'Default'::text NOT NULL
);


ALTER TABLE base."Scenario" OWNER TO rits;

--
-- TOC entry 216 (class 1259 OID 16421)
-- Name: Scenario_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Scenario_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Scenario_id_seq" OWNER TO rits;

--
-- TOC entry 3839 (class 0 OID 0)
-- Dependencies: 216
-- Name: Scenario_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Scenario_id_seq" OWNED BY base."Scenario".id;


--
-- TOC entry 241 (class 1259 OID 16577)
-- Name: Spell; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Spell" (
    id integer NOT NULL,
    name text NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    magic_id integer NOT NULL
);


ALTER TABLE base."Spell" OWNER TO rits;

--
-- TOC entry 240 (class 1259 OID 16576)
-- Name: Spell_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Spell_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Spell_id_seq" OWNER TO rits;

--
-- TOC entry 3840 (class 0 OID 0)
-- Dependencies: 240
-- Name: Spell_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Spell_id_seq" OWNED BY base."Spell".id;


--
-- TOC entry 219 (class 1259 OID 16434)
-- Name: Thread; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."Thread" (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    scenario_id integer NOT NULL
);


ALTER TABLE base."Thread" OWNER TO rits;

--
-- TOC entry 218 (class 1259 OID 16433)
-- Name: Thread_id_seq; Type: SEQUENCE; Schema: base; Owner: rits
--

CREATE SEQUENCE base."Thread_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE base."Thread_id_seq" OWNER TO rits;

--
-- TOC entry 3841 (class 0 OID 0)
-- Dependencies: 218
-- Name: Thread_id_seq; Type: SEQUENCE OWNED BY; Schema: base; Owner: rits
--

ALTER SEQUENCE base."Thread_id_seq" OWNED BY base."Thread".id;


--
-- TOC entry 246 (class 1259 OID 16604)
-- Name: _CharacterToItem; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."_CharacterToItem" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE base."_CharacterToItem" OWNER TO rits;

--
-- TOC entry 245 (class 1259 OID 16601)
-- Name: _CharacterToScenario; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."_CharacterToScenario" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE base."_CharacterToScenario" OWNER TO rits;

--
-- TOC entry 247 (class 1259 OID 16607)
-- Name: _EncounterToScenario; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."_EncounterToScenario" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE base."_EncounterToScenario" OWNER TO rits;

--
-- TOC entry 248 (class 1259 OID 16610)
-- Name: _ItemToScenario; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."_ItemToScenario" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE base."_ItemToScenario" OWNER TO rits;

--
-- TOC entry 244 (class 1259 OID 16598)
-- Name: _LocationToScenario; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."_LocationToScenario" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE base."_LocationToScenario" OWNER TO rits;

--
-- TOC entry 249 (class 1259 OID 16613)
-- Name: _MagicToScenario; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base."_MagicToScenario" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE base."_MagicToScenario" OWNER TO rits;

--
-- TOC entry 215 (class 1259 OID 16408)
-- Name: _prisma_migrations; Type: TABLE; Schema: base; Owner: rits
--

CREATE TABLE base._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE base._prisma_migrations OWNER TO rits;

--
-- TOC entry 3548 (class 2604 OID 16467)
-- Name: Character id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Character" ALTER COLUMN id SET DEFAULT nextval('base."Character_id_seq"'::regclass);


--
-- TOC entry 3596 (class 2604 OID 16559)
-- Name: Encounter id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Encounter" ALTER COLUMN id SET DEFAULT nextval('base."Encounter_id_seq"'::regclass);


--
-- TOC entry 3594 (class 2604 OID 16551)
-- Name: EncounterInstance id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."EncounterInstance" ALTER COLUMN id SET DEFAULT nextval('base."EncounterInstance_id_seq"'::regclass);


--
-- TOC entry 3547 (class 2604 OID 16458)
-- Name: Event id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Event" ALTER COLUMN id SET DEFAULT nextval('base."Event_id_seq"'::regclass);


--
-- TOC entry 3598 (class 2604 OID 16569)
-- Name: Item id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Item" ALTER COLUMN id SET DEFAULT nextval('base."Item_id_seq"'::regclass);


--
-- TOC entry 3543 (class 2604 OID 16446)
-- Name: Location id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Location" ALTER COLUMN id SET DEFAULT nextval('base."Location_id_seq"'::regclass);


--
-- TOC entry 3603 (class 2604 OID 16590)
-- Name: Magic id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Magic" ALTER COLUMN id SET DEFAULT nextval('base."Magic_id_seq"'::regclass);


--
-- TOC entry 3582 (class 2604 OID 16531)
-- Name: Monster id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Monster" ALTER COLUMN id SET DEFAULT nextval('base."Monster_id_seq"'::regclass);


--
-- TOC entry 3577 (class 2604 OID 16512)
-- Name: Path id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Path" ALTER COLUMN id SET DEFAULT nextval('base."Path_id_seq"'::regclass);


--
-- TOC entry 3580 (class 2604 OID 16523)
-- Name: PathInstance id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."PathInstance" ALTER COLUMN id SET DEFAULT nextval('base."PathInstance_id_seq"'::regclass);


--
-- TOC entry 3574 (class 2604 OID 16501)
-- Name: Relationship id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Relationship" ALTER COLUMN id SET DEFAULT nextval('base."Relationship_id_seq"'::regclass);


--
-- TOC entry 3538 (class 2604 OID 16425)
-- Name: Scenario id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Scenario" ALTER COLUMN id SET DEFAULT nextval('base."Scenario_id_seq"'::regclass);


--
-- TOC entry 3601 (class 2604 OID 16580)
-- Name: Spell id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Spell" ALTER COLUMN id SET DEFAULT nextval('base."Spell_id_seq"'::regclass);


--
-- TOC entry 3542 (class 2604 OID 16437)
-- Name: Thread id; Type: DEFAULT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Thread" ALTER COLUMN id SET DEFAULT nextval('base."Thread_id_seq"'::regclass);


--
-- TOC entry 3623 (class 2606 OID 16496)
-- Name: Character Character_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Character"
    ADD CONSTRAINT "Character_pkey" PRIMARY KEY (id);


--
-- TOC entry 3634 (class 2606 OID 16554)
-- Name: EncounterInstance EncounterInstance_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."EncounterInstance"
    ADD CONSTRAINT "EncounterInstance_pkey" PRIMARY KEY (id);


--
-- TOC entry 3637 (class 2606 OID 16564)
-- Name: Encounter Encounter_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Encounter"
    ADD CONSTRAINT "Encounter_pkey" PRIMARY KEY (id);


--
-- TOC entry 3620 (class 2606 OID 16462)
-- Name: Event Event_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Event"
    ADD CONSTRAINT "Event_pkey" PRIMARY KEY (id);


--
-- TOC entry 3640 (class 2606 OID 16575)
-- Name: Item Item_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Item"
    ADD CONSTRAINT "Item_pkey" PRIMARY KEY (id);


--
-- TOC entry 3617 (class 2606 OID 16453)
-- Name: Location Location_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Location"
    ADD CONSTRAINT "Location_pkey" PRIMARY KEY (id);


--
-- TOC entry 3646 (class 2606 OID 16597)
-- Name: Magic Magic_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Magic"
    ADD CONSTRAINT "Magic_pkey" PRIMARY KEY (id);


--
-- TOC entry 3632 (class 2606 OID 16546)
-- Name: Monster Monster_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Monster"
    ADD CONSTRAINT "Monster_pkey" PRIMARY KEY (id);


--
-- TOC entry 3629 (class 2606 OID 16526)
-- Name: PathInstance PathInstance_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."PathInstance"
    ADD CONSTRAINT "PathInstance_pkey" PRIMARY KEY (id);


--
-- TOC entry 3627 (class 2606 OID 16518)
-- Name: Path Path_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Path"
    ADD CONSTRAINT "Path_pkey" PRIMARY KEY (id);


--
-- TOC entry 3625 (class 2606 OID 16507)
-- Name: Relationship Relationship_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Relationship"
    ADD CONSTRAINT "Relationship_pkey" PRIMARY KEY (id);


--
-- TOC entry 3611 (class 2606 OID 16432)
-- Name: Scenario Scenario_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Scenario"
    ADD CONSTRAINT "Scenario_pkey" PRIMARY KEY (id);


--
-- TOC entry 3643 (class 2606 OID 16585)
-- Name: Spell Spell_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Spell"
    ADD CONSTRAINT "Spell_pkey" PRIMARY KEY (id);


--
-- TOC entry 3614 (class 2606 OID 16441)
-- Name: Thread Thread_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Thread"
    ADD CONSTRAINT "Thread_pkey" PRIMARY KEY (id);


--
-- TOC entry 3608 (class 2606 OID 16416)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3621 (class 1259 OID 16620)
-- Name: Character_name_key; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "Character_name_key" ON base."Character" USING btree (name);


--
-- TOC entry 3635 (class 1259 OID 16622)
-- Name: Encounter_name_key; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "Encounter_name_key" ON base."Encounter" USING btree (name);


--
-- TOC entry 3618 (class 1259 OID 16619)
-- Name: Event_name_key; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "Event_name_key" ON base."Event" USING btree (name);


--
-- TOC entry 3638 (class 1259 OID 16623)
-- Name: Item_name_key; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "Item_name_key" ON base."Item" USING btree (name);


--
-- TOC entry 3615 (class 1259 OID 16618)
-- Name: Location_name_key; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "Location_name_key" ON base."Location" USING btree (name);


--
-- TOC entry 3644 (class 1259 OID 16625)
-- Name: Magic_name_key; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "Magic_name_key" ON base."Magic" USING btree (name);


--
-- TOC entry 3630 (class 1259 OID 16621)
-- Name: Monster_name_key; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "Monster_name_key" ON base."Monster" USING btree (name);


--
-- TOC entry 3609 (class 1259 OID 16616)
-- Name: Scenario_name_key; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "Scenario_name_key" ON base."Scenario" USING btree (name);


--
-- TOC entry 3641 (class 1259 OID 16624)
-- Name: Spell_name_key; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "Spell_name_key" ON base."Spell" USING btree (name);


--
-- TOC entry 3612 (class 1259 OID 16617)
-- Name: Thread_name_key; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "Thread_name_key" ON base."Thread" USING btree (name);


--
-- TOC entry 3651 (class 1259 OID 16630)
-- Name: _CharacterToItem_AB_unique; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "_CharacterToItem_AB_unique" ON base."_CharacterToItem" USING btree ("A", "B");


--
-- TOC entry 3652 (class 1259 OID 16631)
-- Name: _CharacterToItem_B_index; Type: INDEX; Schema: base; Owner: rits
--

CREATE INDEX "_CharacterToItem_B_index" ON base."_CharacterToItem" USING btree ("B");


--
-- TOC entry 3649 (class 1259 OID 16628)
-- Name: _CharacterToScenario_AB_unique; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "_CharacterToScenario_AB_unique" ON base."_CharacterToScenario" USING btree ("A", "B");


--
-- TOC entry 3650 (class 1259 OID 16629)
-- Name: _CharacterToScenario_B_index; Type: INDEX; Schema: base; Owner: rits
--

CREATE INDEX "_CharacterToScenario_B_index" ON base."_CharacterToScenario" USING btree ("B");


--
-- TOC entry 3653 (class 1259 OID 16632)
-- Name: _EncounterToScenario_AB_unique; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "_EncounterToScenario_AB_unique" ON base."_EncounterToScenario" USING btree ("A", "B");


--
-- TOC entry 3654 (class 1259 OID 16633)
-- Name: _EncounterToScenario_B_index; Type: INDEX; Schema: base; Owner: rits
--

CREATE INDEX "_EncounterToScenario_B_index" ON base."_EncounterToScenario" USING btree ("B");


--
-- TOC entry 3655 (class 1259 OID 16634)
-- Name: _ItemToScenario_AB_unique; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "_ItemToScenario_AB_unique" ON base."_ItemToScenario" USING btree ("A", "B");


--
-- TOC entry 3656 (class 1259 OID 16635)
-- Name: _ItemToScenario_B_index; Type: INDEX; Schema: base; Owner: rits
--

CREATE INDEX "_ItemToScenario_B_index" ON base."_ItemToScenario" USING btree ("B");


--
-- TOC entry 3647 (class 1259 OID 16626)
-- Name: _LocationToScenario_AB_unique; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "_LocationToScenario_AB_unique" ON base."_LocationToScenario" USING btree ("A", "B");


--
-- TOC entry 3648 (class 1259 OID 16627)
-- Name: _LocationToScenario_B_index; Type: INDEX; Schema: base; Owner: rits
--

CREATE INDEX "_LocationToScenario_B_index" ON base."_LocationToScenario" USING btree ("B");


--
-- TOC entry 3657 (class 1259 OID 16636)
-- Name: _MagicToScenario_AB_unique; Type: INDEX; Schema: base; Owner: rits
--

CREATE UNIQUE INDEX "_MagicToScenario_AB_unique" ON base."_MagicToScenario" USING btree ("A", "B");


--
-- TOC entry 3658 (class 1259 OID 16637)
-- Name: _MagicToScenario_B_index; Type: INDEX; Schema: base; Owner: rits
--

CREATE INDEX "_MagicToScenario_B_index" ON base."_MagicToScenario" USING btree ("B");


--
-- TOC entry 3664 (class 2606 OID 16668)
-- Name: EncounterInstance EncounterInstance_encounter_id_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."EncounterInstance"
    ADD CONSTRAINT "EncounterInstance_encounter_id_fkey" FOREIGN KEY (encounter_id) REFERENCES base."Encounter"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3665 (class 2606 OID 16663)
-- Name: EncounterInstance EncounterInstance_monster_id_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."EncounterInstance"
    ADD CONSTRAINT "EncounterInstance_monster_id_fkey" FOREIGN KEY (monster_id) REFERENCES base."Monster"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3660 (class 2606 OID 16643)
-- Name: Event Event_scenario_id_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Event"
    ADD CONSTRAINT "Event_scenario_id_fkey" FOREIGN KEY (scenario_id) REFERENCES base."Scenario"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3662 (class 2606 OID 16653)
-- Name: PathInstance PathInstance_character_id_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."PathInstance"
    ADD CONSTRAINT "PathInstance_character_id_fkey" FOREIGN KEY (character_id) REFERENCES base."Character"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3663 (class 2606 OID 16658)
-- Name: PathInstance PathInstance_path_id_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."PathInstance"
    ADD CONSTRAINT "PathInstance_path_id_fkey" FOREIGN KEY (path_id) REFERENCES base."Path"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3661 (class 2606 OID 16648)
-- Name: Relationship Relationship_character_id_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Relationship"
    ADD CONSTRAINT "Relationship_character_id_fkey" FOREIGN KEY (character_id) REFERENCES base."Character"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3666 (class 2606 OID 16673)
-- Name: Spell Spell_magic_id_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Spell"
    ADD CONSTRAINT "Spell_magic_id_fkey" FOREIGN KEY (magic_id) REFERENCES base."Magic"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3659 (class 2606 OID 16638)
-- Name: Thread Thread_scenario_id_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."Thread"
    ADD CONSTRAINT "Thread_scenario_id_fkey" FOREIGN KEY (scenario_id) REFERENCES base."Scenario"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3671 (class 2606 OID 16698)
-- Name: _CharacterToItem _CharacterToItem_A_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_CharacterToItem"
    ADD CONSTRAINT "_CharacterToItem_A_fkey" FOREIGN KEY ("A") REFERENCES base."Character"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3672 (class 2606 OID 16703)
-- Name: _CharacterToItem _CharacterToItem_B_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_CharacterToItem"
    ADD CONSTRAINT "_CharacterToItem_B_fkey" FOREIGN KEY ("B") REFERENCES base."Item"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3669 (class 2606 OID 16688)
-- Name: _CharacterToScenario _CharacterToScenario_A_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_CharacterToScenario"
    ADD CONSTRAINT "_CharacterToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES base."Character"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3670 (class 2606 OID 16693)
-- Name: _CharacterToScenario _CharacterToScenario_B_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_CharacterToScenario"
    ADD CONSTRAINT "_CharacterToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES base."Scenario"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3673 (class 2606 OID 16708)
-- Name: _EncounterToScenario _EncounterToScenario_A_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_EncounterToScenario"
    ADD CONSTRAINT "_EncounterToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES base."Encounter"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3674 (class 2606 OID 16713)
-- Name: _EncounterToScenario _EncounterToScenario_B_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_EncounterToScenario"
    ADD CONSTRAINT "_EncounterToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES base."Scenario"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3675 (class 2606 OID 16718)
-- Name: _ItemToScenario _ItemToScenario_A_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_ItemToScenario"
    ADD CONSTRAINT "_ItemToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES base."Item"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3676 (class 2606 OID 16723)
-- Name: _ItemToScenario _ItemToScenario_B_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_ItemToScenario"
    ADD CONSTRAINT "_ItemToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES base."Scenario"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3667 (class 2606 OID 16678)
-- Name: _LocationToScenario _LocationToScenario_A_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_LocationToScenario"
    ADD CONSTRAINT "_LocationToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES base."Location"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3668 (class 2606 OID 16683)
-- Name: _LocationToScenario _LocationToScenario_B_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_LocationToScenario"
    ADD CONSTRAINT "_LocationToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES base."Scenario"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3677 (class 2606 OID 16728)
-- Name: _MagicToScenario _MagicToScenario_A_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_MagicToScenario"
    ADD CONSTRAINT "_MagicToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES base."Magic"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3678 (class 2606 OID 16733)
-- Name: _MagicToScenario _MagicToScenario_B_fkey; Type: FK CONSTRAINT; Schema: base; Owner: rits
--

ALTER TABLE ONLY base."_MagicToScenario"
    ADD CONSTRAINT "_MagicToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES base."Scenario"(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2024-04-13 21:00:11 ACST

--
-- PostgreSQL database dump complete
--

