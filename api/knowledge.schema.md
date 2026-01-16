# Veye Media Canonical Knowledge (Schema Rules)

Required:
- meta.version (string)
- meta.last_updated (YYYY-MM-DD)
- brand.name (string)
- assistant_policy.fallback_message (string)
- systems_we_build (array, at least 1 item)

systems_we_build items:
- name (string) REQUIRED
- outcomes (array of strings) RECOMMENDED (first item is used in fast-path)
- what_it_includes (array of strings) OPTIONAL
- what_it_is_not (array of strings) OPTIONAL

handoff_rules:
- human_handoff_triggers[]: { name, match_any[], handoff_reason }
- handoff_response_template (string)
