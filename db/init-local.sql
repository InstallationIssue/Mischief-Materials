-- Create user
CREATE USER rits WITH PASSWORD '5!4sC5ackerS';

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

CREATE DATABASE rits_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';

ALTER DATABASE rits_db OWNER TO rits;

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

-- Magic
INSERT INTO base."Magic" VALUES(1,'Emetomancy - Vomit Magic','An Emetomancer is a master of their own chunder. Harnessing the raw potential of the gut, an Emetomancer may control their chunks with tele-emesis, melt objects with their heightened acidity and masters often have access to more eldritch abilities. Manipulation abilities dependent on Dex, power dependent on Wil Most abilities use 1 meal, others are explicitly stated','');
INSERT INTO base."Magic" VALUES(2,'Uretic Dredgination','Dredgers have an almost unhealthy fascination with urea. As hoarders and hunters of rare specimens, they often spend hours at a time meditating and studying their collections, coming to  understand each specimen on an intrinsic level. This ability allows them to invoke abilities stored in their specimens.','');
INSERT INTO base."Magic" VALUES(3,'Mental Restructuring','Granted by the Impulse drones, an increasing bonus over time to all mental capabilities at the cost of reduced agency.','');
INSERT INTO base."Magic" VALUES(4,'Keratosis Potestas','','');
INSERT INTO base."Magic" VALUES(5,'Earnest Novel','','');

-- Item
INSERT INTO base."Item" VALUES(1,'Aes buds','plants adapted to live in the scoured sands, deep roots and a tough outer shell mean they can survive as the ferrous tides tear the surrounding landscape to pieces. Aes buds are unique. They accumulate the non-magnetic metals left behind by the tides and concentrate them in their outer shell.',100);
INSERT INTO base."Item" VALUES(2,'Glisten & Turnip (Turn Up)','turnip alcohol, mixed with sugar, served with a hard toffee cap',100);
INSERT INTO base."Item" VALUES(3,'Antibahá’íotics','offered to players by Lycan',100);
INSERT INTO base."Item" VALUES(4,'Earnest novel','seen in Lycan’s pawn shop or LN’s HQ',100);
INSERT INTO base."Item" VALUES(5,'Graijn','valuable seeds in plastic, found in Ferrous tides, can grow super healthy plants',100);
INSERT INTO base."Item" VALUES(6,'Moyahasir','',100);
INSERT INTO base."Item" VALUES(7,'Antiemetics and Antacids','Counter Emetomancy',100);
INSERT INTO base."Item" VALUES(8,'Infinite hourglass','Pauses time for a while when placed so sands start falling',100);
INSERT INTO base."Item" VALUES(9,'Detachable testicles','Offered by Lycan',100);
INSERT INTO base."Item" VALUES(10,'Wizz tingle','',100);
INSERT INTO base."Item" VALUES(11,'Inviolable Egg','',100);
INSERT INTO base."Item" VALUES(12,'Orbs of Power','',100);
INSERT INTO base."Item" VALUES(13,'This is just a long-ass name man','This is going to be a long ass description for testing amirght?',100);

-- Location
INSERT INTO base."Location" VALUES(1,'Zephyr','Zephyr is a city of low-lying houses and lower lying dugouts, only the centre of the city has any building higher than 2 or 3 stories, and the vast majority of the city exists as a large slum.','#EFEC10','city');
INSERT INTO base."Location" VALUES(2,'Crew Safehouse','You are all currently in the crew’s safehouse, a building that would be called a hovel in any other day or age. Consisting of a dugout covered with loosely affixed wooden boards and debris, there are some poorly made wooden chairs and a table and Eufrasio lies on of the 2 beds present, suffering but lucid enough to contribute to the conversation.','#782DD2','medical-house');
INSERT INTO base."Location" VALUES(3,'Loboski''s Luxuries and Curios','A storefront packed high with all manner of items from the old world and the new. You almost can''t see through the windows. Making your way through the narrow stacks and myriad items feels almost like venturing into the lair of a predator and as you reach the back, the owner appears.','#87D22D','store');
INSERT INTO base."Location" VALUES(4,'TAB HQ','A tall narrow building reminiscent of the leaning tower of Pisa, tall columns and flowing arches of wood and stone adorn the exterior while strong walls of carved wood decorate the spaces between and conceal the interior.','#1013EF','outpost');
INSERT INTO base."Location" VALUES(5,'Arid Fields','The Arid fields are large swathes of land devoted to crop production, in areas fields of wheat and turnips stretch for miles among other less-definable plants.','#D9D9D9','warehouse');
INSERT INTO base."Location" VALUES(6,'Khonsu’s Landing','Khonsu’s Landing is a small town primarily sustained by the practice of the locals to explore the ferrous tides and return with items of interest from the old world. Often found among the shifting grains are artefacts of all kinds of value, from old tools that have somehow survived the scouring nature of the tides and drifted unscathed to damaged pieces of ancient culture like books and musical instruments.  The locals live in small ramshackle buildings built from the detritus of their travels, you can see pieces of fibreglass, wood, stained glass and the discarded carapaces of some creature that calls the outer plateau its home.  The locals dress equally eclectic, often covering themselves in leathers and thick cloths to protect themselves from the sun and abrading sands, almost all have some kind of distinguishing clothing. INcluded among these are a man’s shoe made from some hardy looking fish-creature and a woman’s enormous scarf composed of denatured Lencer plumes. Most locals call themselves Waker’s as they ride on the metallic wake driven by the moon’s passage and are a close-knit community with all the drama you’d expect from a small town.','#D9D9D9','city');
INSERT INTO base."Location" VALUES(7,'The Kicked Bucket','The premier place of gathering in town, the Kicked Bucket is one of the more cohesive buildings in town. Made almost entirely of whitened stone from a nearby quarry; it''s by far the tallest building in town at 3 stories.  The inside reveals the 3 floors are all part of the same large room, with balconies ringing an area in the middle where a number of drinking competitions are taking place. A bar sits at the back surrounded by the regulars drinking G&T.','#D9D9D9','store');
INSERT INTO base."Location" VALUES(8,'Waker’s Dock','The Waker Docks are built over long rocky slides that slope down towards the shifting tides at a sharp angle, readied in the docks, you can see several ships. The Black Kettle, An aluminium amalgam Sloop, Its open top is tarnished and coloured a mottled black, while the lower part is a shining silver from being scoured and polished by the grains. Also tows a Rumbler made from 2 identical large shells attached together. Wailing Wakers, the Rumbler. Dusty’s Scourge, a Schooner with sparse red markings, as though scoured away by the sands. Lucretia’s Plea, a Sloop marked with the icon of the Amba brotherhood. Sal’s Sinker, A tumbler readied for outskirts trade.','#D9D9D9','boat');
INSERT INTO base."Location" VALUES(9,'Isenberg','A drifting town riding the flows of the ferrous tides, potted plants and trade with other towns and passing ships sustains the berg.','#D9D9D9','boat');
INSERT INTO base."Location" VALUES(10,'Rend','An unfortunate town sitting between 2 steep slopes, the bottom end of its valley is often covered by the tides and loose grains always end up in town. The high side of the valley has enough space for crops and the locals subsist on that and the occasional passing traveller.','#D9D9D9','city');

-- Encounter
INSERT INTO base."Encounter" VALUES(1,'Arid Fields Lencers');
INSERT INTO base."Encounter" VALUES(2,'Throngler Appears');
INSERT INTO base."Encounter" VALUES(3,'Porpeosie Attack');

-- Scenario
INSERT INTO base."Scenario" VALUES(18,'Heist of Amba HQ','Getting back the Nomad','SunsetDesert');
INSERT INTO base."Scenario" VALUES(19,'Eufrasio Falls','Afflicted with a mysterious disease','NeonCity');
INSERT INTO base."Scenario" VALUES(20,'Race to the Buds','A new ability uncovered','IcelandLupin');
INSERT INTO base."Scenario" VALUES(21,'Actaeon''s Flight','Help the tortured soul escape a hell of its own making','NeonCity');
INSERT INTO base."Scenario" VALUES(22,'Twister Fling','A whirlwind romance','MistyValley');
INSERT INTO base."Scenario" VALUES(23,'MR1 - Las Cuevas','Sombre hill caves','NightMountains');
INSERT INTO base."Scenario" VALUES(24,'MR2 - Queen''s Call to Action','Over the last century, the Twisted Prince wrought havoc on the land, a sorcerer and necromancer of the highest order he brought cities to their knees and was on the verge of upsetting the local economy.  However, due to the tactical mastery of Queen Harlouse, the Twisted Prince was summarily defeated when she lured him and his army into a mountainous cul-de-sac.  The resulting fight was said to be as difficult as shooting fish in a barrel and was celebrated with a week of feasting hosted by the Queen herself.','NightMountains');
INSERT INTO base."Scenario" VALUES(25,'MR3 - Warzone','A strange region has been discovered in the Alaskan Wilderness after a recent research outpost lost contact. Out in the hinterlands, an area has been covered by a fog-like veil, which has been steadily growing in size. After sending in a few scouting parties that ever returned, the people in charge resolve to send in the disposables.','MistyValley');
INSERT INTO base."Scenario" VALUES(26,'MR4 - Luna’s Retribution/The City of Dirt and Wind','It remains a mystery who provoked or initiated world war 3 but its culmination is something well known. The attempted destruction of the moon, caused by someone''s misguided attempt to destroy another nation, resulted in enormous heat and energy being forced into Luna''s crust.   This mechanism reliquified the core and accelerated its internal magnetic dynamo. While humanity narrowly avoided outright annihilation as the magnetic forces the moon closer, the enormous magnetic flux tore down the cities of man through their steel skeletons and ground all of civilization''s achievements to dust.  The modern world bears little resemblance to the old, small pockets of civilization still exist but must work to survive on high plateaus and mountains as periodic tides of ferrous silt and rubble follow Luna’s influence across the planet, scouring everything in their paths.   The city of Zephyr sits atop a wide arid plateau. Known for its reliable arable land and constant piercing wind, it is an oasis amid barren valleys and plains. Tending to small farms and gathering amenities by searching the aftermath of the Ferrous Tides, the citizens of Zephyr manage to live their lives through hard labour without most of the luxuries of ages past.  (Zephyr is a city of around 50,000 people, although clear census has not been conducted in living memory)  The city is also home to a gang of idealists led by the charismatic Lucretia Nihilo, originally started by historians, it’s now known more for its extortion and minor criminal enterprise and goes by the name The Amba Brotherhood.','IcelandLupin');
INSERT INTO base."Scenario" VALUES(27,'MR5 - The Ark of Cognizance','Space station collapse','NeonCity');
INSERT INTO base."Scenario" VALUES(28,'MR6 - Legacy','4 Terrorists','SunsetDesert');
INSERT INTO base."Scenario" VALUES(29,'Tornadus World','Cyclosis','MistyValley');
INSERT INTO base."Scenario" VALUES(30,'Scale Distributed Portals','Here come the test results: You are a horrible person','IcelandLupin');
INSERT INTO base."Scenario" VALUES(46,'tyui','oiuy','');

-- Event

-- Relationship

-- Spell
INSERT INTO base."Spell" VALUES(1,'Pisstallization','',2);
INSERT INTO base."Spell" VALUES(2,'Flaming Phosphor','',2);
INSERT INTO base."Spell" VALUES(3,'Marking Territory','',2);
INSERT INTO base."Spell" VALUES(4,'Born to piss, forced to drink','',2);
INSERT INTO base."Spell" VALUES(5,'Hydrotension','',2);
INSERT INTO base."Spell" VALUES(6,'Kidney Overdrive','',2);
INSERT INTO base."Spell" VALUES(7,'Soaking Splash','',2);
INSERT INTO base."Spell" VALUES(8,'Frictionless Fly','',2);
INSERT INTO base."Spell" VALUES(9,'Slippy Slick','',2);
INSERT INTO base."Spell" VALUES(10,'Subtle Puddle','',2);
INSERT INTO base."Spell" VALUES(11,'Discreet Demonstration','',2);
INSERT INTO base."Spell" VALUES(12,'Urine Communion','',2);
INSERT INTO base."Spell" VALUES(13,'Diuretic Domination','',2);
INSERT INTO base."Spell" VALUES(14,'Wizztal Ball','',2);
INSERT INTO base."Spell" VALUES(15,'Slash Summon','',2);
INSERT INTO base."Spell" VALUES(16,'Tele-emesis','Practitioner can maintain telekinetic control over their vomit',1);
INSERT INTO base."Spell" VALUES(17,'ShipHt','Practitioner can change the acidity of their gut',1);
INSERT INTO base."Spell" VALUES(18,'Regurgitunnel','Practitioner may use 2 meals worth of vomit to create a temporary portal',1);
INSERT INTO base."Spell" VALUES(19,'Spew surfer','Practitioner may use their tele-emesis as a vehicle of transport',1);
INSERT INTO base."Spell" VALUES(20,'Corrosive cascade','Practitioner may release a short range cascade of highly corrosive bile',1);
INSERT INTO base."Spell" VALUES(21,'Point projectile','Requires high manipulation, practitioner may precisely inflict damage',1);
INSERT INTO base."Spell" VALUES(22,'Barf barrier','Practitioner may create a thick congealed barrier, blocking projectiles',1);
INSERT INTO base."Spell" VALUES(23,'Pukesplosion','Practitioner may use all their meals to let loose a devastating AOE attack',1);
INSERT INTO base."Spell" VALUES(24,'Violent upheaval','Practitioner may use all their meals to target 1 enemy',1);
INSERT INTO base."Spell" VALUES(25,'Hyperemesis','Practitioner may store 1 more meal in their stomach',1);
INSERT INTO base."Spell" VALUES(26,'Esophageal Resilience','Practitioner’s throat cannot be damaged by mundane means',1);
INSERT INTO base."Spell" VALUES(27,'Gastric purge','Practitioner can completely empty their stomach to purge toxins',1);

-- Monster
INSERT INTO base."Monster" VALUES(1,'The Throngler','Deep in the sands',27,9,4,2,2,'Colossal',2,'','','');
INSERT INTO base."Monster" VALUES(2,'Ethereal Stag','he Ethereal Stag is one of the ethereal conglomerates known to the people of Zephyr, it is incorporeal and appears a purple tinged outline of a stag. It often disappears into shadows and can duck into darkness to reappear elsewhere.  It cannot be hit by mundane weapons.',11,7,2,3,2,'Tough',2,'','','');
INSERT INTO base."Monster" VALUES(3,'Porpeoisie','Dolphin-like creatures that rapidly burrow through the shifting grains using 2 chitinous appendages that extend from their long mouths lined with sharp teeth like prehensile tusks. Porpeoisie are blind and communicate and see through echolocation.  Their eyes are barely visible and almost entirely useless.  When attacking with magic, a green light emanates from holes going down their back and hurts the person they’re aiming at. Takes a turn to charge.',9,7,1,2,0,'Typical',1,'','','');
INSERT INTO base."Monster" VALUES(4,'Lencer','Downy feathers in plumes behind them that sting their prey  Alcohol or piss is their weakness, it denatures their stings',2,6,0,3,0,'Weak',0,'','','');

-- Character
INSERT INTO base."Character" VALUES(1,'Bozo Billby','Was a small rodent before becoming an adventurer',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(2,'Papa Golochevsky (Papa G)','hired to do a hit on the Amba brotherhood by the golden penalty, it went wrong. Being hunted by both parties now and in hiding',0,1,4,0,6,0,0,0,0,'','','','','','',false,'','','','','','','','');
INSERT INTO base."Character" VALUES(3,'Eufrásio Villapalos (Eufrásio)','fed a bad worm by the Amba gang part of initiation gone wrong and contract celebration gone wrong trans man',0,1,4,0,6,0,0,0,0,'','','','','','',false,'','','','','','','','');
INSERT INTO base."Character" VALUES(4,'Angussy (Gussy)','gullible male stripper who entered highway robbery to earn more money perfect distraction has no testicles',0,1,4,0,6,0,0,0,0,'','','','','','',false,'','','','','','','','');
INSERT INTO base."Character" VALUES(5,'Mohammed Mehmed Sigmalat (Meth Cigs)','pissé stockpiler, a firm believer in the curative powers of powdered urine always has a box on hand',0,1,4,0,6,0,0,0,0,'','','','','','',false,'','','','','','','','');
INSERT INTO base."Character" VALUES(6,'Lucretia Nihilo','Lucretia is an elegant woman, adorned with hundreds of wooden beads',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(7,'Bump Roberts','Long time lieutenant in the Amba Brotherhood',0,1,4,0,6,1,0,2,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(8,'Lichen Loboski','Born into the last Mosswolf family, Lichen has strived to reach capitalist success in Zephyr while maintaining the secret of his birth.',0,1,12,0,8,4,2,1,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(9,'The Tarnished Nomad','',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(10,'Skeev Hanson','',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(11,'Captain Nix Olshe','',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(12,'Actaeon Irving','',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(13,'Queen Harlouse','A master tactician and food enthusiast, after  defeating the Prince, she began looking for ways to expand her kingdom, she believes the Prince''s collection may hold some powerful tools.',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(14,'The Twisted Prince','A powerful lich who collected objects both magical and mundane for centuries prior to trying to conquer the kingdom. Though defeated at the battle of ''corpses in a coffin'', his phylactery remains somewhere within his Stronghold.  Originally a grave robber who gathered trophies from his exploits, he happened upon the grave of an ancient lich and found texts detailing death magics. Practicing these while maintaining his old hobby, the Prince managed to accumulate a great mass of intriguing artifacts.',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(15,'The Builder','Hired by a merchant to build a tavern and mercantile. Eager to talk',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(16,'Aimane Sonet','A Grizzled Warrior. After being injured early on in the Queen’s campaign against The Prince, this warrior is nevertheless a veteran and wants to prove himself by clearing the Prince’s Stronghold.',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(17,'Kapitan','Captain in army, furious after losing men to anomaly. Eager to send in prisoners instead and will not hesitate to shoot deserters or escaping prisoners.',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(18,'President Traitorous','Dictator of Megbellistan, survived through tactical backstabbing until overthrown by an alliance of his past enemies. Secretly captured by the CIA to be used in future government overthrow, but use has passed',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(19,'Valeriya Usmedivich','War Journalist, was documenting the war in Megbellistan when she was caught by soldiers testing biological weapons on civilians.',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(20,'Martin (Marty) Christ','Con man and alleged direct descendant of Jesus. Considered too dangerous to be in the world at large, has started several cults',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(21,'Robert Jr','Bad omen for ending',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');
INSERT INTO base."Character" VALUES(22,'Hank Schrader','American Spy, found documents proving Putin’s sexually charged relationship with Lukashenko, very patriotic',0,1,4,0,6,0,0,0,0,'','','','','','',true,'','','','','','','','');

-- EncounterInstance
INSERT INTO base."EncounterInstance" VALUES(1,4,1,0);
INSERT INTO base."EncounterInstance" VALUES(2,4,1,1);
INSERT INTO base."EncounterInstance" VALUES(3,1,2,0);
INSERT INTO base."EncounterInstance" VALUES(4,3,3,0);
INSERT INTO base."EncounterInstance" VALUES(5,3,3,0);
INSERT INTO base."EncounterInstance" VALUES(6,3,3,0);

-- LocationToScenario
INSERT INTO base."_LocationToScenario" VALUES(6,18);
INSERT INTO base."_LocationToScenario" VALUES(7,18);
INSERT INTO base."_LocationToScenario" VALUES(8,18);
INSERT INTO base."_LocationToScenario" VALUES(9,18);
INSERT INTO base."_LocationToScenario" VALUES(10,18);

-- CharacterToScenario
INSERT INTO base."_CharacterToScenario" VALUES(2,18);
INSERT INTO base."_CharacterToScenario" VALUES(3,18);
INSERT INTO base."_CharacterToScenario" VALUES(4,18);
INSERT INTO base."_CharacterToScenario" VALUES(5,18);
INSERT INTO base."_CharacterToScenario" VALUES(7,18);
INSERT INTO base."_CharacterToScenario" VALUES(9,18);
INSERT INTO base."_CharacterToScenario" VALUES(10,18);
INSERT INTO base."_CharacterToScenario" VALUES(11,18);

-- EncounterToScenario
INSERT INTO base."_EncounterToScenario" VALUES(2,18);
INSERT INTO base."_EncounterToScenario" VALUES(3,18);

-- ItemToScenario
INSERT INTO base."_ItemToScenario" VALUES(1,18);
INSERT INTO base."_ItemToScenario" VALUES(2,18);
INSERT INTO base."_ItemToScenario" VALUES(5,18);
INSERT INTO base."_ItemToScenario" VALUES(9,18);
INSERT INTO base."_ItemToScenario" VALUES(10,18);
INSERT INTO base."_ItemToScenario" VALUES(11,18);
INSERT INTO base."_ItemToScenario" VALUES(12,18);

-- MagicToScenario
INSERT INTO base."_MagicToScenario" VALUES(1,18);
INSERT INTO base."_MagicToScenario" VALUES(2,18);
INSERT INTO base."_MagicToScenario" VALUES(3,18);
INSERT INTO base."_MagicToScenario" VALUES(4,18);

-- CharacterToItem
INSERT INTO base."_CharacterToItem" VALUES(2,1);
INSERT INTO base."_CharacterToItem" VALUES(2,2);
INSERT INTO base."_CharacterToItem" VALUES(2,3);

-- End
-- COMMIT;
