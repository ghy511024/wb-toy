(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '--',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.sql',\n    ignoreCase: true,\n    brackets: [\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    keywords: [\n        \"A\", \"ABORT\", \"ABS\", \"ABSENT\", \"ABSOLUTE\", \"ACCESS\", \"ACCORDING\", \"ACTION\", \"ADA\", \"ADD\", \"ADMIN\", \"AFTER\", \"AGGREGATE\", \"ALL\",\n        \"ALLOCATE\", \"ALSO\", \"ALTER\", \"ALWAYS\", \"ANALYSE\", \"ANALYZE\", \"AND\", \"ANY\", \"ARE\", \"ARRAY\", \"ARRAY_AGG\", \"ARRAY_MAX_CARDINALITY\",\n        \"AS\", \"ASC\", \"ASENSITIVE\", \"ASSERTION\", \"ASSIGNMENT\", \"ASYMMETRIC\", \"AT\", \"ATOMIC\", \"ATTRIBUTE\", \"ATTRIBUTES\", \"AUTHORIZATION\",\n        \"AVG\", \"BACKWARD\", \"BASE64\", \"BEFORE\", \"BEGIN\", \"BEGIN_FRAME\", \"BEGIN_PARTITION\", \"BERNOULLI\", \"BETWEEN\", \"BIGINT\", \"BINARY\",\n        \"BIT\", \"BIT_LENGTH\", \"BLOB\", \"BLOCKED\", \"BOM\", \"BOOLEAN\", \"BOTH\", \"BREADTH\", \"BY\", \"C\", \"CACHE\", \"CALL\", \"CALLED\", \"CARDINALITY\",\n        \"CASCADE\", \"CASCADED\", \"CASE\", \"CAST\", \"CATALOG\", \"CATALOG_NAME\", \"CEIL\", \"CEILING\", \"CHAIN\", \"CHAR\", \"CHARACTER\",\n        \"CHARACTERISTICS\", \"CHARACTERS\", \"CHARACTER_LENGTH\", \"CHARACTER_SET_CATALOG\", \"CHARACTER_SET_NAME\", \"CHARACTER_SET_SCHEMA\",\n        \"CHAR_LENGTH\", \"CHECK\", \"CHECKPOINT\", \"CLASS\", \"CLASS_ORIGIN\", \"CLOB\", \"CLOSE\", \"CLUSTER\", \"COALESCE\", \"COBOL\", \"COLLATE\",\n        \"COLLATION\", \"COLLATION_CATALOG\", \"COLLATION_NAME\", \"COLLATION_SCHEMA\", \"COLLECT\", \"COLUMN\", \"COLUMNS\", \"COLUMN_NAME\",\n        \"COMMAND_FUNCTION\", \"COMMAND_FUNCTION_CODE\", \"COMMENT\", \"COMMENTS\", \"COMMIT\", \"COMMITTED\", \"CONCURRENTLY\", \"CONDITION\",\n        \"CONDITION_NUMBER\", \"CONFIGURATION\", \"CONFLICT\", \"CONNECT\", \"CONNECTION\", \"CONNECTION_NAME\", \"CONSTRAINT\", \"CONSTRAINTS\",\n        \"CONSTRAINT_CATALOG\", \"CONSTRAINT_NAME\", \"CONSTRAINT_SCHEMA\", \"CONSTRUCTOR\", \"CONTAINS\", \"CONTENT\", \"CONTINUE\", \"CONTROL\",\n        \"CONVERSION\", \"CONVERT\", \"COPY\", \"CORR\", \"CORRESPONDING\", \"COST\", \"COUNT\", \"COVAR_POP\", \"COVAR_SAMP\", \"CREATE\", \"CROSS\", \"CSV\",\n        \"CUBE\", \"CUME_DIST\", \"CURRENT\", \"CURRENT_CATALOG\", \"CURRENT_DATE\", \"CURRENT_DEFAULT_TRANSFORM_GROUP\", \"CURRENT_PATH\",\n        \"CURRENT_ROLE\", \"CURRENT_ROW\", \"CURRENT_SCHEMA\", \"CURRENT_TIME\", \"CURRENT_TIMESTAMP\", \"CURRENT_TRANSFORM_GROUP_FOR_TYPE\",\n        \"CURRENT_USER\", \"CURSOR\", \"CURSOR_NAME\", \"CYCLE\", \"DATA\", \"DATABASE\", \"DATALINK\", \"DATE\", \"DATETIME_INTERVAL_CODE\",\n        \"DATETIME_INTERVAL_PRECISION\", \"DAY\", \"DB\", \"DEALLOCATE\", \"DEC\", \"DECIMAL\", \"DECLARE\", \"DEFAULT\", \"DEFAULTS\", \"DEFERRABLE\",\n        \"DEFERRED\", \"DEFINED\", \"DEFINER\", \"DEGREE\", \"DELETE\", \"DELIMITER\", \"DELIMITERS\", \"DENSE_RANK\", \"DEPENDS\", \"DEPTH\", \"DEREF\",\n        \"DERIVED\", \"DESC\", \"DESCRIBE\", \"DESCRIPTOR\", \"DETERMINISTIC\", \"DIAGNOSTICS\", \"DICTIONARY\", \"DISABLE\", \"DISCARD\", \"DISCONNECT\",\n        \"DISPATCH\", \"DISTINCT\", \"DLNEWCOPY\", \"DLPREVIOUSCOPY\", \"DLURLCOMPLETE\", \"DLURLCOMPLETEONLY\", \"DLURLCOMPLETEWRITE\", \"DLURLPATH\",\n        \"DLURLPATHONLY\", \"DLURLPATHWRITE\", \"DLURLSCHEME\", \"DLURLSERVER\", \"DLVALUE\", \"DO\", \"DOCUMENT\", \"DOMAIN\", \"DOUBLE\", \"DROP\",\n        \"DYNAMIC\", \"DYNAMIC_FUNCTION\", \"DYNAMIC_FUNCTION_CODE\", \"EACH\", \"ELEMENT\", \"ELSE\", \"EMPTY\", \"ENABLE\", \"ENCODING\", \"ENCRYPTED\",\n        \"END\", \"END-EXEC\", \"END_FRAME\", \"END_PARTITION\", \"ENFORCED\", \"ENUM\", \"EQUALS\", \"ESCAPE\", \"EVENT\", \"EVERY\", \"EXCEPT\", \"EXCEPTION\",\n        \"EXCLUDE\", \"EXCLUDING\", \"EXCLUSIVE\", \"EXEC\", \"EXECUTE\", \"EXISTS\", \"EXP\", \"EXPLAIN\", \"EXPRESSION\", \"EXTENSION\", \"EXTERNAL\",\n        \"EXTRACT\", \"FALSE\", \"FAMILY\", \"FETCH\", \"FILE\", \"FILTER\", \"FINAL\", \"FIRST\", \"FIRST_VALUE\", \"FLAG\", \"FLOAT\", \"FLOOR\", \"FOLLOWING\",\n        \"FOR\", \"FORCE\", \"FOREIGN\", \"FORTRAN\", \"FORWARD\", \"FOUND\", \"FRAME_ROW\", \"FREE\", \"FREEZE\", \"FROM\", \"FS\", \"FULL\", \"FUNCTION\",\n        \"FUNCTIONS\", \"FUSION\", \"G\", \"GENERAL\", \"GENERATED\", \"GET\", \"GLOBAL\", \"GO\", \"GOTO\", \"GRANT\", \"GRANTED\", \"GREATEST\", \"GROUP\",\n        \"GROUPING\", \"GROUPS\", \"HANDLER\", \"HAVING\", \"HEADER\", \"HEX\", \"HIERARCHY\", \"HOLD\", \"HOUR\", \"ID\", \"IDENTITY\", \"IF\", \"IGNORE\",\n        \"ILIKE\", \"IMMEDIATE\", \"IMMEDIATELY\", \"IMMUTABLE\", \"IMPLEMENTATION\", \"IMPLICIT\", \"IMPORT\", \"IN\", \"INCLUDING\", \"INCREMENT\",\n        \"INDENT\", \"INDEX\", \"INDEXES\", \"INDICATOR\", \"INHERIT\", \"INHERITS\", \"INITIALLY\", \"INLINE\", \"INNER\", \"INOUT\", \"INPUT\",\n        \"INSENSITIVE\", \"INSERT\", \"INSTANCE\", \"INSTANTIABLE\", \"INSTEAD\", \"INT\", \"INTEGER\", \"INTEGRITY\", \"INTERSECT\", \"INTERSECTION\",\n        \"INTERVAL\", \"INTO\", \"INVOKER\", \"IS\", \"ISNULL\", \"ISOLATION\", \"JOIN\", \"K\", \"KEY\", \"KEY_MEMBER\", \"KEY_TYPE\", \"LABEL\", \"LAG\",\n        \"LANGUAGE\", \"LARGE\", \"LAST\", \"LAST_VALUE\", \"LATERAL\", \"LEAD\", \"LEADING\", \"LEAKPROOF\", \"LEAST\", \"LEFT\", \"LENGTH\", \"LEVEL\",\n        \"LIBRARY\", \"LIKE\", \"LIKE_REGEX\", \"LIMIT\", \"LINK\", \"LISTEN\", \"LN\", \"LOAD\", \"LOCAL\", \"LOCALTIME\", \"LOCALTIMESTAMP\", \"LOCATION\",\n        \"LOCATOR\", \"LOCK\", \"LOCKED\", \"LOGGED\", \"LOWER\", \"M\", \"MAP\", \"MAPPING\", \"MATCH\", \"MATCHED\", \"MATERIALIZED\", \"MAX\", \"MAXVALUE\",\n        \"MAX_CARDINALITY\", \"MEMBER\", \"MERGE\", \"MESSAGE_LENGTH\", \"MESSAGE_OCTET_LENGTH\", \"MESSAGE_TEXT\", \"METHOD\", \"MIN\", \"MINUTE\",\n        \"MINVALUE\", \"MOD\", \"MODE\", \"MODIFIES\", \"MODULE\", \"MONTH\", \"MORE\", \"MOVE\", \"MULTISET\", \"MUMPS\", \"NAME\", \"NAMES\", \"NAMESPACE\",\n        \"NATIONAL\", \"NATURAL\", \"NCHAR\", \"NCLOB\", \"NESTING\", \"NEW\", \"NEXT\", \"NFC\", \"NFD\", \"NFKC\", \"NFKD\", \"NIL\", \"NO\", \"NONE\",\n        \"NORMALIZE\", \"NORMALIZED\", \"NOT\", \"NOTHING\", \"NOTIFY\", \"NOTNULL\", \"NOWAIT\", \"NTH_VALUE\", \"NTILE\", \"NULL\", \"NULLABLE\", \"NULLIF\",\n        \"NULLS\", \"NUMBER\", \"NUMERIC\", \"OBJECT\", \"OCCURRENCES_REGEX\", \"OCTETS\", \"OCTET_LENGTH\", \"OF\", \"OFF\", \"OFFSET\", \"OIDS\", \"OLD\",\n        \"ON\", \"ONLY\", \"OPEN\", \"OPERATOR\", \"OPTION\", \"OPTIONS\", \"OR\", \"ORDER\", \"ORDERING\", \"ORDINALITY\", \"OTHERS\", \"OUT\", \"OUTER\",\n        \"OUTPUT\", \"OVER\", \"OVERLAPS\", \"OVERLAY\", \"OVERRIDING\", \"OWNED\", \"OWNER\", \"P\", \"PAD\", \"PARALLEL\", \"PARAMETER\", \"PARAMETER_MODE\",\n        \"PARAMETER_NAME\", \"PARAMETER_ORDINAL_POSITION\", \"PARAMETER_SPECIFIC_CATALOG\", \"PARAMETER_SPECIFIC_NAME\",\n        \"PARAMETER_SPECIFIC_SCHEMA\", \"PARSER\", \"PARTIAL\", \"PARTITION\", \"PASCAL\", \"PASSING\", \"PASSTHROUGH\", \"PASSWORD\", \"PATH\",\n        \"PERCENT\", \"PERCENTILE_CONT\", \"PERCENTILE_DISC\", \"PERCENT_RANK\", \"PERIOD\", \"PERMISSION\", \"PLACING\", \"PLANS\", \"PLI\", \"POLICY\",\n        \"PORTION\", \"POSITION\", \"POSITION_REGEX\", \"POWER\", \"PRECEDES\", \"PRECEDING\", \"PRECISION\", \"PREPARE\", \"PREPARED\", \"PRESERVE\",\n        \"PRIMARY\", \"PRIOR\", \"PRIVILEGES\", \"PROCEDURAL\", \"PROCEDURE\", \"PROGRAM\", \"PUBLIC\", \"QUOTE\", \"RANGE\", \"RANK\", \"READ\", \"READS\",\n        \"REAL\", \"REASSIGN\", \"RECHECK\", \"RECOVERY\", \"RECURSIVE\", \"REF\", \"REFERENCES\", \"REFERENCING\", \"REFRESH\", \"REGR_AVGX\", \"REGR_AVGY\",\n        \"REGR_COUNT\", \"REGR_INTERCEPT\", \"REGR_R2\", \"REGR_SLOPE\", \"REGR_SXX\", \"REGR_SXY\", \"REGR_SYY\", \"REINDEX\", \"RELATIVE\", \"RELEASE\",\n        \"RENAME\", \"REPEATABLE\", \"REPLACE\", \"REPLICA\", \"REQUIRING\", \"RESET\", \"RESPECT\", \"RESTART\", \"RESTORE\", \"RESTRICT\", \"RESULT\",\n        \"RETURN\", \"RETURNED_CARDINALITY\", \"RETURNED_LENGTH\", \"RETURNED_OCTET_LENGTH\", \"RETURNED_SQLSTATE\", \"RETURNING\", \"RETURNS\",\n        \"REVOKE\", \"RIGHT\", \"ROLE\", \"ROLLBACK\", \"ROLLUP\", \"ROUTINE\", \"ROUTINE_CATALOG\", \"ROUTINE_NAME\", \"ROUTINE_SCHEMA\", \"ROW\", \"ROWS\",\n        \"ROW_COUNT\", \"ROW_NUMBER\", \"RULE\", \"SAVEPOINT\", \"SCALE\", \"SCHEMA\", \"SCHEMA_NAME\", \"SCOPE\", \"SCOPE_CATALOG\", \"SCOPE_NAME\",\n        \"SCOPE_SCHEMA\", \"SCROLL\", \"SEARCH\", \"SECOND\", \"SECTION\", \"SECURITY\", \"SELECT\", \"SELECTIVE\", \"SELF\", \"SENSITIVE\", \"SEQUENCE\",\n        \"SEQUENCES\", \"SERIALIZABLE\", \"SERVER\", \"SERVER_NAME\", \"SESSION\", \"SESSION_USER\", \"SET\", \"SETOF\", \"SETS\", \"SHARE\", \"SHOW\",\n        \"SIMILAR\", \"SIMPLE\", \"SIZE\", \"SKIP\", \"SMALLINT\", \"SNAPSHOT\", \"SOME\", \"SOURCE\", \"SPACE\", \"SPECIFIC\", \"SPECIFICTYPE\",\n        \"SPECIFIC_NAME\", \"SQL\", \"SQLCODE\", \"SQLERROR\", \"SQLEXCEPTION\", \"SQLSTATE\", \"SQLWARNING\", \"SQRT\", \"STABLE\", \"STANDALONE\",\n        \"START\", \"STATE\", \"STATEMENT\", \"STATIC\", \"STATISTICS\", \"STDDEV_POP\", \"STDDEV_SAMP\", \"STDIN\", \"STDOUT\", \"STORAGE\", \"STRICT\",\n        \"STRIP\", \"STRUCTURE\", \"STYLE\", \"SUBCLASS_ORIGIN\", \"SUBMULTISET\", \"SUBSTRING\", \"SUBSTRING_REGEX\", \"SUCCEEDS\", \"SUM\", \"SYMMETRIC\",\n        \"SYSID\", \"SYSTEM\", \"SYSTEM_TIME\", \"SYSTEM_USER\", \"T\", \"TABLE\", \"TABLES\", \"TABLESAMPLE\", \"TABLESPACE\", \"TABLE_NAME\", \"TEMP\",\n        \"TEMPLATE\", \"TEMPORARY\", \"TEXT\", \"THEN\", \"TIES\", \"TIME\", \"TIMESTAMP\", \"TIMEZONE_HOUR\", \"TIMEZONE_MINUTE\", \"TO\", \"TOKEN\",\n        \"TOP_LEVEL_COUNT\", \"TRAILING\", \"TRANSACTION\", \"TRANSACTIONS_COMMITTED\", \"TRANSACTIONS_ROLLED_BACK\", \"TRANSACTION_ACTIVE\",\n        \"TRANSFORM\", \"TRANSFORMS\", \"TRANSLATE\", \"TRANSLATE_REGEX\", \"TRANSLATION\", \"TREAT\", \"TRIGGER\", \"TRIGGER_CATALOG\", \"TRIGGER_NAME\",\n        \"TRIGGER_SCHEMA\", \"TRIM\", \"TRIM_ARRAY\", \"TRUE\", \"TRUNCATE\", \"TRUSTED\", \"TYPE\", \"TYPES\", \"UESCAPE\", \"UNBOUNDED\", \"UNCOMMITTED\",\n        \"UNDER\", \"UNENCRYPTED\", \"UNION\", \"UNIQUE\", \"UNKNOWN\", \"UNLINK\", \"UNLISTEN\", \"UNLOGGED\", \"UNNAMED\", \"UNNEST\", \"UNTIL\", \"UNTYPED\",\n        \"UPDATE\", \"UPPER\", \"URI\", \"USAGE\", \"USER\", \"USER_DEFINED_TYPE_CATALOG\", \"USER_DEFINED_TYPE_CODE\", \"USER_DEFINED_TYPE_NAME\",\n        \"USER_DEFINED_TYPE_SCHEMA\", \"USING\", \"VACUUM\", \"VALID\", \"VALIDATE\", \"VALIDATOR\", \"VALUE\", \"VALUES\", \"VALUE_OF\", \"VARBINARY\",\n        \"VARCHAR\", \"VARIADIC\", \"VARYING\", \"VAR_POP\", \"VAR_SAMP\", \"VERBOSE\", \"VERSION\", \"VERSIONING\", \"VIEW\", \"VIEWS\", \"VOLATILE\",\n        \"WHEN\", \"WHENEVER\", \"WHERE\", \"WHITESPACE\", \"WIDTH_BUCKET\", \"WINDOW\", \"WITH\", \"WITHIN\", \"WITHOUT\", \"WORK\", \"WRAPPER\", \"WRITE\",\n        \"XML\", \"XMLAGG\", \"XMLATTRIBUTES\", \"XMLBINARY\", \"XMLCAST\", \"XMLCOMMENT\", \"XMLCONCAT\", \"XMLDECLARATION\", \"XMLDOCUMENT\",\n        \"XMLELEMENT\", \"XMLEXISTS\", \"XMLFOREST\", \"XMLITERATE\", \"XMLNAMESPACES\", \"XMLPARSE\", \"XMLPI\", \"XMLQUERY\", \"XMLROOT\", \"XMLSCHEMA\",\n        \"XMLSERIALIZE\", \"XMLTABLE\", \"XMLTEXT\", \"XMLVALIDATE\", \"YEAR\", \"YES\", \"ZONE\"\n    ],\n    operators: [\n        \"AND\", \"BETWEEN\", \"IN\", \"LIKE\", \"NOT\", \"OR\", \"IS\", \"NULL\", \"INTERSECT\", \"UNION\", \"INNER\", \"JOIN\", \"LEFT\", \"OUTER\", \"RIGHT\"\n    ],\n    builtinFunctions: [\n        \"abbrev\", \"abs\", \"acos\", \"acosd\", \"age\", \"any\", \"area\", \"array_agg\", \"array_append\", \"array_cat\", \"array_dims\", \"array_fill\",\n        \"array_length\", \"array_lower\", \"array_ndims\", \"array_position\", \"array_positions\", \"array_prepend\", \"array_remove\", \"array_replace\",\n        \"array_to_json\", \"array_to_string\", \"array_to_tsvector\", \"array_upper\", \"ascii\", \"asin\", \"asind\", \"atan\", \"atan2\", \"atan2d\", \"atand\",\n        \"avg\", \"bit\", \"bit_and\", \"bit_length\", \"bit_or\", \"bool_and\", \"bool_or\", \"bound_box\", \"box\", \"brin_summarize_new_values\", \"broadcast\",\n        \"btrim\", \"cardinality\", \"cbrt\", \"ceil\", \"ceiling\", \"center\", \"char_length\", \"character_length\", \"chr\", \"circle\", \"clock_timestamp\",\n        \"coalesce\", \"col_description\", \"concat\", \"concat_ws\", \"convert\", \"convert_from\", \"convert_to\", \"corr\", \"cos\", \"cosd\", \"cot\", \"cotd\",\n        \"count\", \"covar_pop\", \"covar_samp\", \"cume_dist\", \"current_catalog\", \"current_database\", \"current_date\", \"current_query\", \"current_role\",\n        \"current_schema\", \"current_schemas\", \"current_setting\", \"current_time\", \"current_timestamp\", \"current_user\", \"currval\", \"cursor_to_xml\",\n        \"date_part\", \"date_trunc\", \"decode\", \"degrees\", \"dense_rank\", \"diameter\", \"div\", \"encode\", \"enum_first\", \"enum_last\", \"enum_range\", \"every\",\n        \"exp\", \"extract\", \"family\", \"first_value\", \"floor\", \"format\", \"format_type\", \"generate_series\", \"generate_subscripts\", \"get_bit\", \"get_byte\",\n        \"get_current_ts_config\", \"gin_clean_pending_list\", \"greatest\", \"grouping\", \"has_any_column_privilege\", \"has_column_privilege\",\n        \"has_database_privilege\", \"has_foreign_data_wrapper_privilege\", \"has_function_privilege\", \"has_language_privilege\", \"has_schema_privilege\",\n        \"has_sequence_privilege\", \"has_server_privilege\", \"has_table_privilege\", \"has_tablespace_privilege\", \"has_type_privilege\", \"height\", \"host\",\n        \"hostmask\", \"inet_client_addr\", \"inet_client_port\", \"inet_merge\", \"inet_same_family\", \"inet_server_addr\", \"inet_server_port\", \"initcap\",\n        \"isclosed\", \"isempty\", \"isfinite\", \"isopen\", \"json_agg\", \"json_object\", \"json_object_agg\", \"json_populate_record\", \"json_populate_recordset\",\n        \"json_to_record\", \"json_to_recordset\", \"jsonb_agg\", \"jsonb_object_agg\", \"justify_days\", \"justify_hours\", \"justify_interval\", \"lag\",\n        \"last_value\", \"lastval\", \"lead\", \"least\", \"left\", \"length\", \"line\", \"ln\", \"localtime\", \"localtimestamp\", \"log\", \"lower\", \"lower_inc\",\n        \"lower_inf\", \"lpad\", \"lseg\", \"ltrim\", \"make_date\", \"make_interval\", \"make_time\", \"make_timestamp\", \"make_timestamptz\", \"masklen\", \"max\",\n        \"md5\", \"min\", \"mod\", \"mode\", \"netmask\", \"network\", \"nextval\", \"now\", \"npoints\", \"nth_value\", \"ntile\", \"nullif\", \"num_nonnulls\", \"num_nulls\",\n        \"numnode\", \"obj_description\", \"octet_length\", \"overlay\", \"parse_ident\", \"path\", \"pclose\", \"percent_rank\", \"percentile_cont\", \"percentile_disc\",\n        \"pg_advisory_lock\", \"pg_advisory_lock_shared\", \"pg_advisory_unlock\", \"pg_advisory_unlock_all\", \"pg_advisory_unlock_shared\", \"pg_advisory_xact_lock\",\n        \"pg_advisory_xact_lock_shared\", \"pg_backend_pid\", \"pg_backup_start_time\", \"pg_blocking_pids\", \"pg_cancel_backend\", \"pg_client_encoding\",\n        \"pg_collation_is_visible\", \"pg_column_size\", \"pg_conf_load_time\", \"pg_control_checkpoint\", \"pg_control_init\", \"pg_control_recovery\",\n        \"pg_control_system\", \"pg_conversion_is_visible\", \"pg_create_logical_replication_slot\", \"pg_create_physical_replication_slot\", \"pg_create_restore_point\",\n        \"pg_current_xlog_flush_location\", \"pg_current_xlog_insert_location\", \"pg_current_xlog_location\", \"pg_database_size\", \"pg_describe_object\",\n        \"pg_drop_replication_slot\", \"pg_export_snapshot\", \"pg_filenode_relation\", \"pg_function_is_visible\", \"pg_get_constraintdef\", \"pg_get_expr\",\n        \"pg_get_function_arguments\", \"pg_get_function_identity_arguments\", \"pg_get_function_result\", \"pg_get_functiondef\", \"pg_get_indexdef\", \"pg_get_keywords\",\n        \"pg_get_object_address\", \"pg_get_owned_sequence\", \"pg_get_ruledef\", \"pg_get_serial_sequence\", \"pg_get_triggerdef\", \"pg_get_userbyid\", \"pg_get_viewdef\",\n        \"pg_has_role\", \"pg_identify_object\", \"pg_identify_object_as_address\", \"pg_index_column_has_property\", \"pg_index_has_property\", \"pg_indexam_has_property\",\n        \"pg_indexes_size\", \"pg_is_in_backup\", \"pg_is_in_recovery\", \"pg_is_other_temp_schema\", \"pg_is_xlog_replay_paused\", \"pg_last_committed_xact\",\n        \"pg_last_xact_replay_timestamp\", \"pg_last_xlog_receive_location\", \"pg_last_xlog_replay_location\", \"pg_listening_channels\", \"pg_logical_emit_message\",\n        \"pg_logical_slot_get_binary_changes\", \"pg_logical_slot_get_changes\", \"pg_logical_slot_peek_binary_changes\", \"pg_logical_slot_peek_changes\", \"pg_ls_dir\",\n        \"pg_my_temp_schema\", \"pg_notification_queue_usage\", \"pg_opclass_is_visible\", \"pg_operator_is_visible\", \"pg_opfamily_is_visible\", \"pg_options_to_table\",\n        \"pg_postmaster_start_time\", \"pg_read_binary_file\", \"pg_read_file\", \"pg_relation_filenode\", \"pg_relation_filepath\", \"pg_relation_size\", \"pg_reload_conf\",\n        \"pg_replication_origin_create\", \"pg_replication_origin_drop\", \"pg_replication_origin_oid\", \"pg_replication_origin_progress\", \"pg_replication_origin_session_is_setup\",\n        \"pg_replication_origin_session_progress\", \"pg_replication_origin_session_reset\", \"pg_replication_origin_session_setup\", \"pg_replication_origin_xact_reset\",\n        \"pg_replication_origin_xact_setup\", \"pg_rotate_logfile\", \"pg_size_bytes\", \"pg_size_pretty\", \"pg_sleep\", \"pg_sleep_for\", \"pg_sleep_until\", \"pg_start_backup\",\n        \"pg_stat_file\", \"pg_stop_backup\", \"pg_switch_xlog\", \"pg_table_is_visible\", \"pg_table_size\", \"pg_tablespace_databases\", \"pg_tablespace_location\",\n        \"pg_tablespace_size\", \"pg_terminate_backend\", \"pg_total_relation_size\", \"pg_trigger_depth\", \"pg_try_advisory_lock\", \"pg_try_advisory_lock_shared\",\n        \"pg_try_advisory_xact_lock\", \"pg_try_advisory_xact_lock_shared\", \"pg_ts_config_is_visible\", \"pg_ts_dict_is_visible\", \"pg_ts_parser_is_visible\",\n        \"pg_ts_template_is_visible\", \"pg_type_is_visible\", \"pg_typeof\", \"pg_xact_commit_timestamp\", \"pg_xlog_location_diff\", \"pg_xlog_replay_pause\",\n        \"pg_xlog_replay_resume\", \"pg_xlogfile_name\", \"pg_xlogfile_name_offset\", \"phraseto_tsquery\", \"pi\", \"plainto_tsquery\", \"point\", \"polygon\", \"popen\", \"position\",\n        \"power\", \"pqserverversion\", \"query_to_xml\", \"querytree\", \"quote_ident\", \"quote_literal\", \"quote_nullable\", \"radians\", \"radius\", \"random\", \"range_merge\",\n        \"rank\", \"regexp_matches\", \"regexp_replace\", \"regexp_split_to_array\", \"regexp_split_to_table\", \"regr_avgx\", \"regr_avgy\", \"regr_count\", \"regr_intercept\",\n        \"regr_r2\", \"regr_slope\", \"regr_sxx\", \"regr_sxy\", \"regr_syy\", \"repeat\", \"replace\", \"reverse\", \"right\", \"round\", \"row_number\", \"row_security_active\",\n        \"row_to_json\", \"rpad\", \"rtrim\", \"scale\", \"session_user\", \"set_bit\", \"set_byte\", \"set_config\", \"set_masklen\", \"setseed\", \"setval\", \"setweight\",\n        \"shobj_description\", \"sign\", \"sin\", \"sind\", \"split_part\", \"sprintf\", \"sqrt\", \"statement_timestamp\", \"stddev\", \"stddev_pop\", \"stddev_samp\", \"string_agg\",\n        \"string_to_array\", \"strip\", \"strpos\", \"substr\", \"substring\", \"sum\", \"table_to_xml\", \"table_to_xml_and_xmlschema\", \"tan\", \"tand\", \"text\", \"timeofday\",\n        \"timezone\", \"to_ascii\", \"to_char\", \"to_date\", \"to_hex\", \"to_json\", \"to_number\", \"to_regclass\", \"to_regnamespace\", \"to_regoper\", \"to_regoperator\", \"to_regproc\",\n        \"to_regprocedure\", \"to_regrole\", \"to_regtype\", \"to_timestamp\", \"to_tsquery\", \"to_tsvector\", \"transaction_timestamp\", \"translate\", \"trim\", \"trunc\", \"ts_debug\",\n        \"ts_delete\", \"ts_filter\", \"ts_headline\", \"ts_lexize\", \"ts_parse\", \"ts_rank\", \"ts_rank_cd\", \"ts_rewrite\", \"ts_stat\", \"ts_token_type\", \"tsquery_phrase\",\n        \"tsvector_to_array\", \"tsvector_update_trigger\", \"tsvector_update_trigger_column\", \"txid_current\", \"txid_current_snapshot\", \"txid_snapshot_xip\", \"txid_snapshot_xmax\",\n        \"txid_snapshot_xmin\", \"txid_visible_in_snapshot\", \"unnest\", \"upper\", \"upper_inc\", \"upper_inf\", \"user\", \"var_pop\", \"var_samp\", \"variance\", \"version\", \"width\",\n        \"width_bucket\", \"xml_is_well_formed\", \"xml_is_well_formed_content\", \"xml_is_well_formed_document\", \"xmlagg\", \"xmlcomment\", \"xmlconcat\", \"xmlelement\", \"xmlexists\",\n        \"xmlforest\", \"xmlparse\", \"xmlpi\", \"xmlroot\", \"xmlserialize\", \"xpath\", \"xpath_exists\"\n    ],\n    builtinVariables: [\n    // NOT SUPPORTED\n    ],\n    pseudoColumns: [\n    // NOT SUPPORTED\n    ],\n    tokenizer: {\n        root: [\n            { include: '@comments' },\n            { include: '@whitespace' },\n            { include: '@pseudoColumns' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@complexIdentifiers' },\n            { include: '@scopes' },\n            [/[;,.]/, 'delimiter'],\n            [/[()]/, '@brackets'],\n            [/[\\w@#$]+/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@operators': 'operator',\n                        '@builtinVariables': 'predefined',\n                        '@builtinFunctions': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[<>=!%&+\\-*/|~^]/, 'operator'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white']\n        ],\n        comments: [\n            [/--+.*/, 'comment'],\n            [/\\/\\*/, { token: 'comment.quote', next: '@comment' }]\n        ],\n        comment: [\n            [/[^*/]+/, 'comment'],\n            // Not supporting nested comments, as nested comments seem to not be standard?\n            // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic\n            // [/\\/\\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(\n            [/\\*\\//, { token: 'comment.quote', next: '@pop' }],\n            [/./, 'comment']\n        ],\n        pseudoColumns: [\n            [/[$][A-Za-z_][\\w@#$]*/, {\n                    cases: {\n                        '@pseudoColumns': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*/, 'number'],\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\n        ],\n        strings: [\n            [/'/, { token: 'string', next: '@string' }],\n        ],\n        string: [\n            [/[^']+/, 'string'],\n            [/''/, 'string'],\n            [/'/, { token: 'string', next: '@pop' }]\n        ],\n        complexIdentifiers: [\n            [/\"/, { token: 'identifier.quote', next: '@quotedIdentifier' }]\n        ],\n        quotedIdentifier: [\n            [/[^\"]+/, 'identifier'],\n            [/\"\"/, 'identifier'],\n            [/\"/, { token: 'identifier.quote', next: '@pop' }]\n        ],\n        scopes: [\n        // NOT SUPPORTED\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.js?");

/***/ })

}]);